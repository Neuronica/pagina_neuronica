import { Component, HostListener, inject, PLATFORM_ID, OnInit, Inject} from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';
import * as AOS from 'aos';

@Component({
  selector: 'app-cctv',
  templateUrl: './cctv.component.html',
  styleUrls: ['./cctv.component.css']
})
export class CctvComponent implements OnInit{
  public getwidth: any;
  public getheight: any;
  iconoVariable: boolean = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private title:Title, private meta:Meta){}

  ngOnInit(){
    if(isPlatformBrowser(this.platformId)){
        AOS.init();
        window.addEventListener('load', AOS.refresh);
        this.getwidth = window.innerWidth;
        this.getheight = window.innerHeight;
        this.title.setTitle("Seguridad Garantizada con Nuestro Sistema CCTV en Bogotá");
        this.meta.addTag({name: 'description', content: 'En Neurónica, nos especializamos en brindar soluciones integrales de seguridad con nuestro sistema de Circuito Cerrado de Televisión (CCTV) en Bogotá. Descubre la esencia del CCTV, sus tipos de cámaras según resolución, tecnología y campo de visión. Protege tu hogar o negocio con nuestra avanzada tecnología CCTV, disuadiendo el crimen, mejorando la eficiencia operativa y reduciendo costos. ¡Contáctanos hoy mismo para una instalación y configuración de CCTV adaptada a tus necesidades y garantiza la seguridad de tus seres queridos o tu negocio!'});
        this.meta.addTag({name: 'keywords', content: 'CCTV Bogotá, Seguridad y vigilancia, Cámaras de seguridad, Tipos de cámaras CCTV, Beneficios del CCTV, Instalación de sistemas CCTV, Tecnología avanzada de seguridad, Protección para hogares y negocios, Equipo de expertos en CCTV.'});
      }
    }

  @HostListener('window:resize', ['$event'])

  onWindowResize(){
    this.getwidth = window.innerWidth;
    this.getheight = window.innerHeight;
  }
}
