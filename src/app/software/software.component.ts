import { Component, HostListener } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';
import * as AOS from 'aos';

@Component({
  selector: 'app-software',
  templateUrl: './software.component.html',
  styleUrls: ['./software.component.css']
})
export class SoftwareComponent {
  public getwidth: any;
  public getheight: any;
  iconoVariable: boolean = false;
  constructor(private title:Title, private meta:Meta){}
  ngOnInit(){
    AOS.init();
    window.addEventListener('load', AOS.refresh);
    this.getwidth = window.innerWidth;
    this.getheight = window.innerHeight;
    this.title.setTitle("Desarrollo de Software a la Medida en Bogotá | Neurónica Ingeniería");
    this.meta.addTag({name: 'description', content: 'Optimiza tus procesos con los servicios de desarrollo de software a la medida de Neurónica Ingeniería en Bogotá. Descubre qué es el software a la medida y cómo puede proporcionar una solución personalizada y eficiente para las necesidades específicas de tu empresa. Obtén ventajas competitivas, escalabilidad con programas desarrollados en lenguajes como Python, Java, C/C++, y JavaScript. A diferencia del software estándar, el software a la medida se adapta a tus procesos existentes, brindando una solución sin compromisos. Contáctanos para potenciar el rendimiento y la eficiencia de tu empresa.'});
    this.meta.addTag({name: 'keywords', content: 'Software a la medida Bogotá, Desarrollo de software personalizado, Soluciones eficientes para empresas, Ventajas competitivas del software a medida, Escalabilidad en desarrollo de software, Lenguajes de programación: Python, Java, C/C++, JavaScript, Diferencias entre software estándar y a medida.'});
  }

  @HostListener('window:resize', ['$event'])

  onWindowResize(){
    this.getwidth = window.innerWidth;
    this.getheight = window.innerHeight;
  }
}
