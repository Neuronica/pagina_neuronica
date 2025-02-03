import { Component, HostListener, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';
import * as AOS from 'aos';

@Component({
  selector: 'app-software',
  templateUrl: './software.component.html',
  styleUrls: ['./software.component.css']
})
export class SoftwareComponent  implements OnInit{
  public getwidth: any;
  public getheight: any;
  iconoVariable: boolean = false;
  constructor(@Inject(PLATFORM_ID) private platformId:Object,private title:Title, private meta:Meta){}

  ngOnInit(){
    if(isPlatformBrowser(this.platformId)){
      AOS.init();
      window.addEventListener('load', AOS.refresh);
      this.getwidth = window.innerWidth;
      this.getheight = window.innerHeight;
      this.title.setTitle("Desarrollo de Software en Bogotá | Neurónica");
      this.meta.addTag({name: 'description', content: 'Creamos programas personalizados, desde firmware y automatizaciones hasta recopilación de datos. Tu socio local para soluciones tecnológicas innovadoras.'});
      this.meta.addTag({name: 'keywords', content: 'desarrollo de software a la medida Bogotá, desarrollo de software personalizado, software a medida'});
    }
  }

  @HostListener('window:resize', ['$event'])

  onWindowResize(){
    this.getwidth = window.innerWidth;
    this.getheight = window.innerHeight;
  }
}
