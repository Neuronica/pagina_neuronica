import { Component, HostListener, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';
import * as AOS from 'aos';

@Component({
  selector: 'app-recopilacion-datos',
  templateUrl: './recopilacion-datos.component.html',
  styleUrls: ['./recopilacion-datos.component.css']
})
export class RecopilacionDatosComponent implements OnInit{
  public getwidth: any;
  public getheight: any;
  iconoVariable: boolean = false;

  constructor(@Inject(PLATFORM_ID) private platformId:Object, private title:Title, private meta:Meta){}
  
  ngOnInit(){
    if(isPlatformBrowser(this.platformId)){
      AOS.init();
      window.addEventListener('load', AOS.refresh);
      this.getwidth = window.innerWidth;
      this.getheight = window.innerHeight;
      this.title.setTitle("Recopilación y Analítica de Datos con IoT | Neurónica");
      this.meta.addTag({name: 'description', content: 'En Neurónica creamos hardware y software para recolección de datos, bases de información y analítica avanzada. Toma decisiones con datos precisos.'});
      this.meta.addTag({name: 'keywords', content: 'Analítica de datos, Recolección de datos, Bases de Datos, IoT'});
    }
  }

  @HostListener('window:resize', ['$event'])

  onWindowResize(){
    this.getwidth = window.innerWidth;
    this.getheight = window.innerHeight;
  }
}
