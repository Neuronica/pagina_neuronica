import { Component, HostListener, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';
import * as AOS from 'aos';

@Component({
    selector: 'app-automatizacion',
    templateUrl: './automatizacion.component.html',
    styleUrls: ['./automatizacion.component.css'],
    standalone: false
})
export class AutomatizacionComponent implements OnInit{
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
      this.title.setTitle("Automatizaciones de Software en Bogotá | Neurónica");
      this.meta.addTag({name: 'description', content: 'Ahorra tiempo y enfócate en la producción con soluciones que automatizan procesos manuales. Creamos software personalizado para agilizar tus tareas diarias.'});
      this.meta.addTag({name: 'keywords', content: 'Desarrollo de software Bogotá, Automatizaciones de software, Software personalizado'});
    }
  }

  @HostListener('window:resize', ['$event'])

  onWindowResize(){
    this.getwidth = window.innerWidth;
    this.getheight = window.innerHeight;
  }
}
