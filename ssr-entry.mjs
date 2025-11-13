// ssr-entry.mjs — entrypoint robusto para Cloud Run
import { createServer as createHttpServer } from 'node:http';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distRoot  = path.join(__dirname, 'dist', 'neuronica');
const serverDir = path.join(distRoot, 'server');
const browserDir= path.join(distRoot, 'browser');

const port = process.env.PORT || 8080;
const host = '0.0.0.0';

// 1) Bootstrap: setea manifests de Angular (side-effects)
try {
  await import(path.join(serverDir, 'main.server.mjs'));
  console.log('[SSR] Loaded main.server.mjs (manifests set)');
} catch (e) {
  console.warn('[SSR] Could not load main.server.mjs:', e?.message);
}

// 2) Carga el bundle del server
const mod = await import(path.join(serverDir, 'server.mjs'));

function takeExpressApp(mod) {
  const app = mod?.app ?? mod?.default?.app;
  return (app && typeof app.listen === 'function') ? app : null;
}

async function wrapHandler(mod) {
  const handler = mod?.handler ?? mod?.default?.handler;
  if (typeof handler !== 'function') return null;

  const express = (await import('express')).default;
  const app = express();
  app.use(express.static(browserDir, { maxAge: '1y', index: false }));
  app.all('*', (req, res) => handler(req, res));
  return app;
}

async function wrapRender(mod) {
  const render = mod?.render ?? mod?.default?.render;
  if (typeof render !== 'function') return null;

  const express = (await import('express')).default;
  const app = express();
  app.use(express.static(browserDir, { maxAge: '1y', index: false }));
  app.all('*', async (req, res, next) => {
    try { await render(req, res); } catch (e) { next(e); }
  });
  return app;
}

let app = takeExpressApp(mod);
if (!app) {
  try { app = await wrapHandler(mod); } catch { /* sin express */ }
}
if (!app) {
  try { app = await wrapRender(mod); } catch { /* sin express */ }
}

// 3) Último recurso: handler HTTP crudo o CSR fallback
if (!app) {
  const handle = mod?.handle ?? mod?.default?.handle ?? mod?.default;
  if (typeof handle === 'function') {
    const server = createHttpServer((req, res) => handle(req, res));
    server.listen(port, host, () => console.log(`[SSR] Raw handler on http://${host}:${port}`));
    process.on('SIGTERM', () => server.close());
    process.on('SIGINT',  () => server.close());
    // No seguimos, ya está escuchando
    return;
  }

  // CSR fallback (sirve index.csr.html si existe)
  let express, serveStatic;
  try {
    express     = (await import('express')).default;
    serveStatic = (await import('serve-static')).default;
  } catch {
    const { readFile } = await import('node:fs/promises');
    const index = await readFile(path.join(browserDir, 'index.csr.html'), 'utf8').catch(() => '');
    const server = createHttpServer((req, res) => {
      res.writeHead(200, { 'content-type': 'text/html; charset=utf-8' });
      res.end(index || 'CSR fallback');
    });
    server.listen(port, host, () => console.log(`[SSR] CSR fallback on http://${host}:${port}`));
    return;
  }

  const app2 = express();
  app2.use(serveStatic(browserDir, { maxAge: '1y', index: ['index.csr.html','index.html'] }));
  app2.get('*', (req, res) => res.sendFile(path.join(browserDir, 'index.csr.html')));
  app = app2;
}

// 4) Escucha en PORT
app.set('port', port);
app.listen(port, host, () => console.log(`[SSR] Listening on http://${host}:${port}`));
process.on('SIGTERM', () => process.exit(0));
process.on('SIGINT',  () => process.exit(0));
