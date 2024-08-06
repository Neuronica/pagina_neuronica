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
    this.title.setTitle("Cableado Estructurado en Bogotá: Soluciones Empresariales para Redes Eficientes");
    this.meta.addTag({name: 'description', content: 'Mejore la conectividad empresarial en Bogotá con Neurónica, expertos en cableado estructurado. Servicios de instalación y certificación de redes de voz, datos y video para empresas con modelos de trabajo presencial o híbrido. Soluciones escalables y proyectos de mantenimiento. ¡Optimice su infraestructura hoy! #CableadoEstructurado #EmpresasBogotá #ConectividadEficiente'});
    this.meta.addTag({name: 'keywords', content: 'instalación de redes de computadores, cableado estructurado en bogotá, cableado estructurado empresas, instalación de redes locales, cableado estructurado y redes'});
    this.meta.addTag({name: 'robots', content: 'index'});
  }

  @HostListener('window:resize', ['$event'])

  onWindowResize(){
    this.getwidth = window.innerWidth;
    this.getheight = window.innerHeight;
  }
}
