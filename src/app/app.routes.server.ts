import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  { path: '', renderMode: RenderMode.Prerender },
  {
    path: 'proyecto/:id',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => [
      { id: 'neuronica' },
      { id: 'iot' },
      { id: 'software' },
    ],
  },

  {
    path: '**',
    renderMode: RenderMode.Server,
  },
  { path: '**', renderMode: RenderMode.Server },
];
