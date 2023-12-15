import { Component, HostListener} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';
import * as AOS from 'aos';

@Component({
  selector: 'app-domotica',
  templateUrl: './domotica.component.html',
  styleUrls: ['./domotica.component.css']
})
export class DomoticaComponent {
  public getwidth: any;
  public getheight: any;

  constructor(private title:Title, private meta:Meta){}

  ngOnInit(){
    AOS.init();
    window.addEventListener('load', AOS.refresh);
    this.getwidth = window.innerWidth;
    this.getheight = window.innerHeight;
    this.title.setTitle("Domótica Personalizada en Bogotá | Neurónica - Tecnología e Innovación");
    this.meta.addTag({name: 'description', content: 'Descubre la tecnología e innovación en tu hogar con los servicios de domótica personalizada de Neurónica en Bogotá. Exploramos qué es la domótica y cómo puede transformar tu hogar en un espacio inteligente y eficiente. Nuestro equipo de ingenieros expertos diseña proyectos a medida, brindando soluciones innovadoras para mejorar tu calidad de vida. Control remoto, eficiencia energética, seguridad avanzada y adaptabilidad personalizada son solo algunas de las ventajas que ofrecemos. ¡Transforma tu hogar con Neurónica y descubre el futuro de la ingeniería aplicada a tu vida diaria!.'});
    this.meta.addTag({name: 'keywords', content: 'Domótica personalizada Bogotá, Tecnología e innovación en el hogar, Transformación a espacio inteligente, Ingeniería en Bogotá, Control remoto del hogar, Eficiencia energética domótica, Seguridad avanzada para hogares, Adaptabilidad personalizada en ingeniería, Ejemplos de domótica.'});
  }

  @HostListener('window:resize', ['$event'])

  onWindowResize(){
    this.getwidth = window.innerWidth;
    this.getheight = window.innerHeight;
  }
}
