import { Component, HostListener, Inject, PLATFORM_ID, OnInit} from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';
import * as AOS from 'aos';

@Component({
  selector: 'app-hogar',
  templateUrl: './hogar.component.html',
  styleUrls: ['./hogar.component.css']
})
export class HogarComponent implements OnInit{
  public getwidth: any;
  public getheight: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private title:Title, private meta:Meta){ }

  ngOnInit(){
    if(isPlatformBrowser(this.platformId)){
      AOS.init();
      window.addEventListener('load', AOS.refresh);
      this.getwidth = window.innerWidth;
      this.getheight = window.innerHeight;
      this.title.setTitle("Ingeniería para Hogar en Neurónica: Elevando Tu Experiencia con Servicios Personalizados");
      this.meta.addTag({name: 'description', content: 'Experimenta hogares más cómodos y seguros con Neurónica. Nos comprometemos profundamente con la satisfacción de nuestros clientes, ofreciendo servicios personalizados que simplifican y mejoran tu entorno de vida. Desde avanzadas soluciones de CCTV hasta proyectos de domótica a medida, en Neurónica hacemos tus sueños tangibles. Descubre la innovación en cada rincón de tu hogar y hazlo más seguro, cómodo y tecnológicamente avanzado con nosotros.'});
      this.meta.addTag({name: 'keywords', content: 'Ingeniería para hogar Bogotá, Servicio CCTV Neurónica, Seguridad para hogares, Domótica personalizada Bogotá, Proyectos de domótica, Innovación en hogares, Comodidad y seguridad, Tecnología para el hogar.'});
    }
  }

  @HostListener('window:resize', ['$event'])

  onWindowResize(){
    this.getwidth = window.innerWidth;
    this.getheight = window.innerHeight;
  }
}
