import { Component, HostListener, Inject, PLATFORM_ID, OnInit} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';
import * as AOS from 'aos';

@Component({
    selector: 'app-nosotros',
    templateUrl: './nosotros.component.html',
    styleUrls: ['./nosotros.component.css'],
    standalone: false
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
      this.title.setTitle("Descubre a Neurónica S.A.S: Soluciones de Ingeniería Personalizada en Bogotá");
      this.meta.addTag({name: 'description', content: 'Conoce a Neurónica S.A.S, líderes en ingeniería personalizada. Nuestra empresa se destaca en la integración de tecnologías avanzadas en áreas de hardware, software, IoT y manufactura. Descubre cómo nuestras soluciones personalizadas abordan tus necesidades específicas'});
      this.meta.addTag({name: 'keywords', content: 'Ingeniería a la medida, Neurónica'});
    }
  }

  @HostListener('window:resize', ['$event'])

  onWindowResize(){
    this.getwidth = window.innerWidth;
    this.getheight = window.innerHeight;
  }
}
