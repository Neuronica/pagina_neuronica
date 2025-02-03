import { Component, HostListener, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';
import * as AOS from 'aos';

@Component({
  selector: 'app-laser',
  templateUrl: './laser.component.html',
  styleUrls: ['./laser.component.css']
})
export class LaserComponent implements OnInit{
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
      this.title.setTitle("Corte Láser en Bogotá | Neurónica");
      this.meta.addTag({name: 'description', content: 'Realiza proyectos en madera, acrílicos y más con nuestro servicio de corte láser. Crea productos, trabajos publicitarios o regalos para fidelizar clientes.'});
      this.meta.addTag({name: 'keywords', content: 'Corte láser Bogotá, Corte de madera, Corte de acrílicos, Ingeniería y fabricación personalizada'});
    }
  }

  @HostListener('window:resize', ['$event'])

  onWindowResize(){
    this.getwidth = window.innerWidth;
    this.getheight = window.innerHeight;
  }
}
