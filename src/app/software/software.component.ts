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
    this.title.setTitle("Desarrollo de Software a Medida en Bogotá: Soluciones Personalizadas para Empresas");
    this.meta.addTag({name: 'description', content: 'Descubre nuestro servicio de Desarrollo de Software a Medida en Bogotá. Creamos programas personalizados, ya sea aplicaciones web o de escritorio, cumpliendo con tus especificaciones. Especializados en JavaScript, Java, Python, C y C++. Además, para aplicaciones web, ofrecemos diseño, desarrollo, adquisición de dominio y despliegue. Para aplicaciones de escritorio, cubrimos diseño, desarrollo y despliegue en intranets o servidores locales. Tu socio local para soluciones tecnológicas personalizadas en Bogotá.'});
    this.meta.addTag({name: 'keywords', content: 'desarrollo de software a la medida bogotá, desarrollo de aplicaciones a medida, software hecho a la medida desarrollo a la medida software, desarrollo de software personalizado'});
  }

  @HostListener('window:resize', ['$event'])

  onWindowResize(){
    this.getwidth = window.innerWidth;
    this.getheight = window.innerHeight;
  }
}
