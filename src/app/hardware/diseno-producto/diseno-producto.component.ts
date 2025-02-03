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
      this.title.setTitle("Diseño de Producto Electrónico en Bogotá | Neurónica");
      this.meta.addTag({name: 'description', content: 'Convierte tu idea en realidad con nuestro servicio integral. Acompañamos todo el proceso: requerimientos, prototipado, pruebas de campo y producción masiva.'});
      this.meta.addTag({name: 'keywords', content: 'Diseño electrónico y prototipado Bogotá, Soluciones de ingeniería electrónica, Producción electrónica, Eficiencia y rendimiento del hardware'});
    }
  }

  @HostListener('window:resize', ['$event'])

  onWindowResize(){
    this.getwidth = window.innerWidth;
    this.getheight = window.innerHeight;
  }
}