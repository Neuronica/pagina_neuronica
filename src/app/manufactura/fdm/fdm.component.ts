import { Component, HostListener, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';
import * as AOS from 'aos';

@Component({
  selector: 'app-fdm',
  templateUrl: './fdm.component.html',
  styleUrls: ['./fdm.component.css']
})
export class FdmComponent implements OnInit{
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
      this.title.setTitle("Impresión 3D en Bogotá con FDM | Neurónica");
      this.meta.addTag({name: 'description', content: 'Optimiza tus proyectos con impresión 3D FDM en PLA, PETG o TPU. Ofrecemos prototipado y producción escalable para ingeniería y fabricación personalizada.'});
      this.meta.addTag({name: 'keywords', content: 'Impresión 3D Bogotá, FDM, PLA, PETG, TPU, Ingeniería y fabricación personalizada'});
    }
  }

  @HostListener('window:resize', ['$event'])

  onWindowResize(){
    this.getwidth = window.innerWidth;
    this.getheight = window.innerHeight;
  }
}
