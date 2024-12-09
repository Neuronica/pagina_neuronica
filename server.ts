import 'zone.js/node';
import { APP_BASE_HREF } from '@angular/common';
import { ngExpressEngine } from '@nguniversal/express-engine';
import express, { Request, Response } from 'express';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';
import AppServerModule from './src/main.server';

export function app(): express.Express {
  const server = express();
  const serverDistFolder = dirname(fileURLToPath(import.meta.url));
  const browserDistFolder = resolve(serverDistFolder, '../browser');
  
  // Configuramos el engine de Angular Universal
  server.engine('html', (_, options: any, callback: any) => {
    const req: Request = options.req;

    ngExpressEngine({
      bootstrap: AppServerModule,
      // Aquí puedes colocar proveedores extras si lo requieres
      providers: [
        { provide: APP_BASE_HREF, useValue: req.baseUrl }
      ]
    })(_, options, callback);
  });

  server.set('view engine', 'html');
  server.set('views', browserDistFolder);

  // Servir archivos estáticos
  server.get('*.*', express.static(browserDistFolder, {
    maxAge: '1y'
  }));

  // Todas las rutas se sirven con Angular Universal
  server.get('*', (req: Request, res: Response, next) => {
    // 'index' corresponde a 'index.html' en la carpeta dist. 
    // No hace falta poner '.html' ya que el engine ya está configurado.
    res.render('index', { req }, (err, html) => {
      if (err) return next(err);
      res.send(html);
    });
  });

  return server;
}

function run(): void {
  const port = process.env['PORT'] || 4000;
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

run();
