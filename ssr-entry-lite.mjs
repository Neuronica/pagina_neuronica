// Entry mínimo: sirve el build CSR para que Cloud Run quede healthy
import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const browserDir = path.join(__dirname, 'dist', 'neuronica', 'browser');

const app = express();
const port = process.env.PORT || 8080;
const host = '0.0.0.0';

app.use(express.static(browserDir, { maxAge: '1y', index: false }));
app.get('*', (req, res) => res.sendFile(path.join(browserDir, 'index.csr.html')));

app.listen(port, host, () => {
  console.log(`[CSR] Listening on http://${host}:${port}`);
});
