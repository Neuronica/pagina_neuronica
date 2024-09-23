import { Component, HostListener, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';
import * as AOS from 'aos';

@Component({
  selector: 'app-impresion',
  templateUrl: './impresion.component.html',
  styleUrls: ['./impresion.component.css']
})
export class ImpresionComponent implements OnInit{
  public getwidth: any;
  public getheight: any;
  iconoVariable: boolean = false;

  constructor(@Inject(PLATFORM_ID) private platformId:Object, private title:Title, private meta:Meta){}
  
  ngOnInit(){
    if(isPlatformBrowser(this.platformId)){
      AOS.init();
      window.addEventListener('load', AOS.refresh);
      this.getwidth = window.innerWidth;
      this.getheight = window.innerHeight;
      this.title.setTitle("Impresión 3D en Bogotá: Transforma Ideas en Realidad con Neurónica Ingeniería");
      this.meta.addTag({name: 'description', content: 'Descubre el futuro de la fabricación personalizada con Neurónica en Bogotá. Explora la tecnología revolucionaria de impresión 3D que transforma ideas en objetos tangibles. Ofrecemos dos tecnologías líderes, FDM y LCD, cada una con sus ventajas únicas. Personaliza tu creación con una variedad de materiales, desde el versátil PLA hasta el resistente ABS. Desde prototipos hasta producción a gran escala, nuestro equipo de ingenieros está comprometido a hacer realidad tus visiones con la precisión de la impresión 3D. ¡Impulsa tu innovación con Neurónica hoy!.'});
      this.meta.addTag({name: 'keywords', content: 'Impresión 3D Bogotá, Tecnología de fabricación personalizada, FDM vs. LCD: Ventajas y desventajas, Materiales de impresión 3D: PLA, ABS, PETG, TPU, Ingeniería y fabricación personalizada, Prototipos y producción a gran escala, Transforma ideas en objetos tangibles con Neurónica.'});
    }
  }

  @HostListener('window:resize', ['$event'])

  onWindowResize(){
    this.getwidth = window.innerWidth;
    this.getheight = window.innerHeight;
  }
}
