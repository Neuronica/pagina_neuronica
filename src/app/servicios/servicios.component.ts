import { Component, HostListener} from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import * as AOS from 'aos';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent {
  public getwidth: any;
  public getheight: any;

  constructor(private title:Title, private meta:Meta){}

  ngOnInit(){
    AOS.init();
    window.addEventListener('load', AOS.refresh);
    this.getwidth = window.innerWidth;
    this.getheight = window.innerHeight;
    this.title.setTitle("Servicios de Ingeniería a Medida en Bogotá | Neurónica - Hogar y Empresas");
    this.meta.addTag({name: 'description', content: 'Descubre los servicios de ingeniería a medida de Neurónica en Bogotá. Desde soluciones personalizadas para hogares que mejoran la comodidad hasta ingeniería empresarial que impulsa el crecimiento y optimiza el tiempo de trabajo. Somos tu aliado en la implementación de nuevas tecnologías para resolver problemas y contribuir al progreso. ¡Haz realidad tus ideas con Neurónica.'});
    this.meta.addTag({name: 'keywords', content:'Servicios de ingeniería Bogotá, Ingeniería para hogar, Soluciones personalizadas, Ingeniería empresarial Neurónica Tecnologías para empresas, Crecimiento empresarial Bogotá, Optimización del tiempo de trabajo, Implementación de nuevas tecnologías.'});
  }

  @HostListener('window:resize', ['$event'])

  onWindowResize(){
    this.getwidth = window.innerWidth;
    this.getheight = window.innerHeight;
  }
}