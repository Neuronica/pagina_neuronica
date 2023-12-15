import { Component, HostListener } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';
import * as AOS from 'aos';

@Component({
  selector: 'app-cctv',
  templateUrl: './cctv.component.html',
  styleUrls: ['./cctv.component.css']
})
export class CctvComponent {
  public getwidth: any;
  public getheight: any;
  iconoVariable: boolean = false;

  constructor(private title:Title, private meta:Meta){}

  ngOnInit(){
    AOS.init();
    window.addEventListener('load', AOS.refresh);
    this.getwidth = window.innerWidth;
    this.getheight = window.innerHeight;
    this.title.setTitle("Servicio de CCTV en Bogotá | Neurónica - Protección y Tecnología Avanzada");
    this.meta.addTag({name: 'description', content: 'Descubre el servicio de CCTV de Neurónica en Bogotá, especialistas en soluciones integrales de seguridad y vigilancia. Exploramos qué es el CCTV, los tipos de cámaras utilizadas y sus beneficios, desde la protección de la seguridad hasta la mejora de la eficiencia. Neurónica ofrece instalación y configuración de sistemas CCTV avanzados. Protege tu hogar o negocio con nuestra tecnología. Contáctanos hoy para obtener más información y elige el sistema de CCTV adecuado con la ayuda de nuestro equipo de expertos.'});
    this.meta.addTag({name: 'keywords', content: 'CCTV Bogotá, Seguridad y vigilancia, Cámaras de seguridad, Tipos de cámaras CCTV, Beneficios del CCTV, Instalación de sistemas CCTV, Tecnología avanzada de seguridad, Protección para hogares y negocios, Equipo de expertos en CCTV.'});
  }

  @HostListener('window:resize', ['$event'])

  onWindowResize(){
    this.getwidth = window.innerWidth;
    this.getheight = window.innerHeight;
  }
}
