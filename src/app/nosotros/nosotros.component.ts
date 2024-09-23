import { Component, HostListener, Inject, PLATFORM_ID, OnInit} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';
import * as AOS from 'aos';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent implements OnInit{
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
      this.title.setTitle("Descubre a Neurónica S.A.S: Soluciones de Ingeniería a la Medida");
      this.meta.addTag({name: 'description', content: 'Conoce a Neurónica S.A.S, líderes en ingeniería a la medida. Nuestra empresa se destaca en la integración de tecnologías avanzadas como IoT, impresión 3D e inteligencia artificial. Descubre cómo nuestras soluciones personalizadas abordan tus necesidades específicas en software, hardware, telecomunicaciones y manufactura.'});
      this.meta.addTag({name: 'keywords', content: 'Neurónica, Bogotá, Ingeniería a medida, Internet de las Cosas Bogotá, Impresión 3D, Inteligencia artificial, Soluciones personalizadas, Líderes en ingeniería Bogotá, Innovación en tecnología Adaptabilidad en ingeniería.'});
    }
  }

  @HostListener('window:resize', ['$event'])

  onWindowResize(){
    this.getwidth = window.innerWidth;
    this.getheight = window.innerHeight;
  }
}
