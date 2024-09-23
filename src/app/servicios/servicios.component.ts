import { Component, HostListener, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';
import * as AOS from 'aos';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})

export class ServiciosComponent implements OnInit{
  public getwidth: any;
  public getheight: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private title:Title, private meta:Meta){}

  ngOnInit(){
    if(isPlatformBrowser(this.platformId)){
      AOS.init();
      window.addEventListener('load', AOS.refresh);
      this.getwidth = window.innerWidth;
      this.getheight = window.innerHeight;
      this.title.setTitle("Ingeniería a Medida en Neurónica: Transformando Hogares y Empresas con Soluciones Personalizadas");
      this.meta.addTag({name: 'description', content: 'Descubre el impacto de la ingeniería a medida en Neurónica, donde personalizamos tu hogar y optimizamos tu empresa. Desde soluciones innovadoras para la vida cotidiana hasta estrategias tecnológicas para el crecimiento empresarial, en Neurónica hacemos realidad tus ideas. Explora cómo nuestras soluciones a medida impulsan la comodidad en el hogar y potencian el éxito empresarial, todo diseñado para satisfacer tus necesidades específicas y adaptarse a un futuro más inteligente.'});
      this.meta.addTag({name: 'keywords', content:'Servicios de ingeniería Bogotá, Ingeniería para hogar, Soluciones personalizadas, Ingeniería empresarial, Crecimiento empresarial Bogotá, Optimización del tiempo de trabajo, Implementación de nuevas tecnologías'});
    }
  }

  @HostListener('window:resize', ['$event'])

  onWindowResize(){
    this.getwidth = window.innerWidth;
    this.getheight = window.innerHeight;
  }
}