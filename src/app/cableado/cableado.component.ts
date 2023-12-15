import { Component, HostListener } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';
import * as AOS from 'aos';

@Component({
  selector: 'app-cableado',
  templateUrl: './cableado.component.html',
  styleUrls: ['./cableado.component.css']
})
export class CableadoComponent {
  public getwidth: any;
  public getheight: any;
  iconoVariable: boolean = false;

  constructor(private title:Title, private meta:Meta){}

  ngOnInit(){
    AOS.init();
    window.addEventListener('load', AOS.refresh);
    this.getwidth = window.innerWidth;
    this.getheight = window.innerHeight;
    this.title.setTitle("Cableado Estructurado para Empresas en Bogotá | Neurónica Ingeniería");
    this.meta.addTag({name: 'description', content: 'Conecta tu empresa al futuro con las soluciones de cableado estructurado de Neurónica Ingeniería en Bogotá. Descubre qué es el cableado estructurado, sus elementos clave, y cómo nuestros proyectos garantizan redes eficientes y confiables. Desde el medio de transmisión hasta los armarios de comunicación, utilizamos cables UTP de alta calidad. Explora las diferentes categorías, desde Cat5e hasta Cat8, y los beneficios que ofrecemos: escalabilidad, fiabilidad, organización y mejora de la productividad. Optimiza tu infraestructura de red con nosotros.'});
    this.meta.addTag({name: 'keywords', content: 'Cableado estructurado Bogotá, Soluciones de cableado para empresas, Redes eficientes y confiables, Elementos de cableado estructurado, Medio de transmisión UTP, Puntos de acceso WiFi, Paneles de conexión en telecomunicaciones, Armarios de comunicación, Tipos de cable UTP, Beneficios del cableado estructurado.'});
  }

  @HostListener('window:resize', ['$event'])

  onWindowResize(){
    this.getwidth = window.innerWidth;
    this.getheight = window.innerHeight;
  }
}
