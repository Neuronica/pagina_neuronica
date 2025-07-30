import { Component, HostListener, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';
import * as AOS from 'aos';

@Component({
    selector: 'app-inicio',
    templateUrl: './inicio.component.html',
    styleUrls: ['./inicio.component.css'],
    standalone: false
})
export class InicioComponent implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private title:Title, private meta:Meta) {}

  public getwidth: any;
  public getheight: any;

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init();
      window.addEventListener('load', AOS.refresh);
      this.getwidth = window.innerWidth;
      this.getheight = window.innerHeight;
      this.title.setTitle("Neurónica S.A.S - Ingeniería a la Medida en Bogotá");
      this.meta.addTag({name: 'description', content: 'Descubre Neurónica, tu aliado confiable en ingeniería a la medida en Bogotá. Soluciones integrales en software, hardware, IoT y manufactura ajustadas a tus necesidades y presupuesto'});
      this.meta.addTag({name: 'keywords', content: 'Neurónica, Ingeniería a medida, Bogotá, Neuronica'});
    }
  }

  @HostListener('window:resize', ['$event'])

  onWindowResize(){
    this.getwidth = window.innerWidth;
    this.getheight = window.innerHeight;
  }
}

