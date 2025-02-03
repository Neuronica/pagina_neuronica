import { Component, HostListener, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';
import * as AOS from 'aos';

@Component({
  selector: 'app-sla',
  templateUrl: './sla.component.html',
  styleUrls: ['./sla.component.css']
})
export class SlaComponent implements OnInit{
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
      this.title.setTitle("Impresión 3D en Bogotá con SLA | Neurónica");
      this.meta.addTag({name: 'description', content: 'Descubre la precisión y detalle de la tecnología SLA. Ideal para prototipos complejos y producciones que requieran acabados de alta calidad.'});
      this.meta.addTag({name: 'keywords', content: 'Impresión 3D Bogotá, SLA, Impresión resina, Ingeniería y fabricación personalizada'});
    }
  }

  @HostListener('window:resize', ['$event'])

  onWindowResize(){
    this.getwidth = window.innerWidth;
    this.getheight = window.innerHeight;
  }
}
