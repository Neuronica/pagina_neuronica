import { Component, HostListener, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';
import * as AOS from 'aos';

@Component({
  selector: 'app-cnc',
  templateUrl: './cnc.component.html',
  styleUrls: ['./cnc.component.css']
})
export class CncComponent implements OnInit{
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
      this.title.setTitle("Corte CNC en Bogotá | Neurónica");
      this.meta.addTag({name: 'description', content: 'Realizamos corte y fresado de metales y plásticos con alta precisión. Ideal para prototipado o producción masiva. Calidad y repetibilidad garantizadas.'});
      this.meta.addTag({name: 'keywords', content: 'Corte CNC Bogotá, Fresado, Corte metales, Manufactura'});
    }
  }

  @HostListener('window:resize', ['$event'])

  onWindowResize(){
    this.getwidth = window.innerWidth;
    this.getheight = window.innerHeight;
  }
}
