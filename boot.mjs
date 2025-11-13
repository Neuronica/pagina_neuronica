// boot.mjs — arranque robusto para Cloud Run (siempre escucha en PORT)
import { createServer } from 'node:http';
import { spawn } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import fs from 'node:fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distRoot  = path.join(__dirname, 'dist', 'neuronica');
const serverDir = path.join(distRoot, 'server');
const browserDir= path.join(distRoot, 'browser');

const port = Number(process.env.PORT || 8080);
const host = '0.0.0.0';

const diag = {
  now: new Date().toISOString(),
  node: process.version,
  cwd: process.cwd(),
  envPort: process.env.PORT,
  paths: { __dirname, distRoot, serverDir, browserDir },
  exists: {
    distRoot: fs.existsSync(distRoot),
    serverDir: fs.existsSync(serverDir),
    browserDir: fs.existsSync(browserDir),
  },
  readdir: {}
};

// listados rápidos
try { diag.readdir.srv = fs.readdirSync('/srv'); } catch {}
try { diag.readdir.distRoot = fs.readdirSync(distRoot); } catch {}
try { diag.readdir.serverDir = fs.readdirSync(serverDir); } catch {}
try { diag.readdir.browserDir = fs.readdirSync(browserDir); } catch {}

console.log('[BOOT] Diagnostics:', JSON.stringify(diag, null, 2));

// -------------------------------------------
// INTENTO 1: Express + estáticos (si está disponible)
// -------------------------------------------
let expressApp = null;
try {
  const express = (await import('express')).default;
  const app = express();

  if (fs.existsSync(browserDir)) {
    app.use(express.static(browserDir, { maxAge: '1y', index: false }));
    console.log('[BOOT] express static mounted:', browserDir);
  } else {
    console.warn('[BOOT] browserDir NOT FOUND:', browserDir);
  }

  // SSR (opcional): si quieres probar, descomenta esto cuando resuelva SSR
  // const mod = await import(path.join(serverDir, 'server.mjs'));
  // if (typeof mod?.handler === 'function') {
  //   app.all('*', (req, res) => mod.handler(req, res));
  // } else {
  //   app.get('*', (req, res) => res.sendFile(path.join(browserDir, 'index.csr.html')));
  // }

  expressApp = app;
  console.log('[BOOT] Express loaded OK');
} catch (e) {
  console.warn('[BOOT] Express not available or failed to init:', e?.message);
}

// -------------------------------------------
// SERVIDOR HTTP SIEMPRE ACTIVO
// - Si hay express, lo usamos para rutas no /diag|/health
// - Siempre exponemos /health y /diag
// -------------------------------------------
const server = createServer(async (req, res) => {
  try {
    if (req.url === '/health') {
      res.writeHead(200, { 'content-type': 'text/plain' });
      res.end('ok');
      return;
    }

    if (req.url === '/diag') {
      res.writeHead(200, { 'content-type': 'application/json' });
      res.end(JSON.stringify(diag, null, 2));
      return;
    }

    if (expressApp) {
      // delega a express (compat simple)
      expressApp(req, res);
      return;
    }

    // fallback mínimo si no hay express
    res.writeHead(200, { 'content-type': 'text/plain; charset=utf-8' });
    res.end('OK (no express)\n');
  } catch (err) {
    console.error('[BOOT] Request error:', err);
    res.writeHead(500, { 'content-type': 'text/plain' });
    res.end('Internal error');
  }
});

server.listen(port, host, () => {
  console.log(`[BOOT] Listening on http://${host}:${port}`);
});

process.on('uncaughtException', (e) => {
  console.error('[BOOT] uncaughtException:', e);
});
process.on('unhandledRejection', (e) => {
  console.error('[BOOT] unhandledRejection:', e);
});
