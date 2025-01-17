import { Component, HostListener, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';
import * as AOS from 'aos';

@Component({
  selector: 'app-diseno-producto',
  templateUrl: './diseno-producto.component.html',
  styleUrls: ['./diseno-producto.component.css']
})
export class DisenoProductoComponent {
  public getwidth: any;
  public getheight: any;
  iconoVariable: boolean = false;

  constructor(@Inject(PLATFORM_ID) private platformId:Object, private title:Title, private meta:Meta){}

  ngOnInit(){
    if(isPlatformBrowser(this.platformId)){
      AOS.init();
      window.addEventListener('load', AOS.refresh);
      this.getwidth = window.innerWidth;
      this.getheight = window.innerHeight
      this.title.setTitle("Diseño de productos electrónicos: Convertimos tus ideas a realidades");
      this.meta.addTag({name: 'description', content: 'Explora'});
      this.meta.addTag({name: 'keywords', content: 'Diseño electrónico y prototipado Bogotá, Hardware a medida, Soluciones de ingeniería electrónica, Beneficios del diseño electrónico personalizado, Iteraciones eficientes en prototipado, Eficiencia y rendimiento del hardware a medida.'});
    }
  }

  @HostListener('window:resize', ['$event'])

  onWindowResize(){
    this.getwidth = window.innerWidth;
    this.getheight = window.innerHeight;
  }
}