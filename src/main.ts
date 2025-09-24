// main.ts
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then(() => {
    // Solo en navegador
    if (typeof window === 'undefined' || typeof document === 'undefined') return;

    // Import dinámico SIN await
    import('aos').then(({ default: AOS }) => {
      setTimeout(() => {
        AOS.init({
          duration: 800,
          once: false,
        });
      }, 0);
    });
  })
  .catch(err => console.error(err));
