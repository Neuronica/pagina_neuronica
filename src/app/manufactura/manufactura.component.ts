import { Component, HostListener, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';
import * as AOS from 'aos';

@Component({
    selector: 'app-impresion',
    templateUrl: './manufactura.component.html',
    styleUrls: ['./manufactura.component.css'],
    standalone: false
})
export class ManufacturaComponent implements OnInit{
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
      this.title.setTitle("Servicio de Manufactura en Bogotá | Neurónica");
      this.meta.addTag({name: 'description', content: 'Descubre nuestra gama de tecnologías de manufactura: impresión 3D (FDM, SLA), corte láser y CNC. Transforma tus ideas en prototipos o producciones en serie.'});
      this.meta.addTag({name: 'keywords', content: 'Neurónica, Impresión 3D Bogotá, Tecnología FDM, Tecnología SLA, Láser, CNC, Fresado'});
    }
  }

  @HostListener('window:resize', ['$event'])

  onWindowResize(){
    this.getwidth = window.innerWidth;
    this.getheight = window.innerHeight;
  }
}
