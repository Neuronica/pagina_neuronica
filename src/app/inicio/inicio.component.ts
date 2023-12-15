import { Component, HostListener } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';
import * as Aos from 'aos';
import * as AOS from 'aos';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  public getwidth: any;
  public getheight: any;

  constructor(private title:Title, private meta:Meta){}

  ngOnInit(){
    AOS.init();
    window.addEventListener('load', AOS.refresh);
    this.getwidth = window.innerWidth;
    this.getheight = window.innerHeight;
    this.title.setTitle("Neurónica | Ingeniería a la medida");
    this.meta.addTag({name: 'description', content: 'Descubre en Neurónica, en Bogotá, Colombia, soluciones integrales en ingeniería a medida. Ofrecemos servicios de cableado estructurado, Cctv, software personalizado, domótica, impresión 3D y diseño electrónico. Nuestra empresa se destaca por la confianza respaldada por garantías sólidas y un enfoque meticuloso desde la conceptualización hasta la implementación. ¡Explora la excelencia en servicios adaptados a tus necesidades y presupuesto!.'});
    this.meta.addTag({name: 'keywords', content: 'Neurónica Bogotá, Ingeniería a medida, Cableado estructurado Bogotá, Cctv servicios Colombia, Software personalizado, Domótica Bogotá, Impresión 3D servicios, Diseño electrónico Neurónica, Garantía de servicios.'});
  }

  @HostListener('window:resize', ['$event'])

  onWindowResize(){
    this.getwidth = window.innerWidth;
    this.getheight = window.innerHeight;
  }
}

