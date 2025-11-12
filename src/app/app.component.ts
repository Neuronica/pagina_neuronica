import { Component, HostListener, PLATFORM_ID, Inject, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule, HttpClient } from '@angular/common/http';
import * as AOS from 'aos';
import 'aos/dist/aos.css';

const CLOUD_RUN_URL = 'https://pagina-neuronica-backend-490354620288.us-west1.run.app'; 
const API_BASE = `${CLOUD_RUN_URL}/api`;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})


export class AppComponent implements OnInit, AfterViewInit{
  title = 'neuronica';
  public getwidth: number | undefined;
  public getheight: number | undefined;
  public menuCel: boolean = false;
  public iconoVariable: boolean = false;
  public openMenu: boolean = false;
  public desplegar: boolean = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object, 
    private http: HttpClient, // Inyectar HttpClient
  ) {}
  
  abrirMenu(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.menuCel = !this.menuCel;
      this.iconoVariable = !this.iconoVariable;
      this.openMenu = !this.openMenu;
      this.desplegar = false;
    }
  }

  desplegarMenu(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.desplegar = !this.desplegar;
    }
  }

  cerrarVariables(): void {
    if (this.desplegar) {
      this.desplegar = false;
    }
  }

  ngOnInit(): void { 
    // Restauramos la lógica que tenías antes (obtener el tamaño de ventana)
    if (isPlatformBrowser(this.platformId)) {
      this.getwidth = window.innerWidth;
      this.getheight = window.innerHeight;
    }
  }

  ngAfterViewInit(): void { // <-- ¡Agrega este método!
      if (isPlatformBrowser(this.platformId)) {
        // Inicializar AOS solo en el navegador
        AOS.init({
          // Opciones de configuración (si es necesario)
          duration: 800,
          once: true,
        });
      }
  }
}
