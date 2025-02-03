import { Component, HostListener, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';
import * as AOS from 'aos';


@Component({
  selector: 'app-pcba',
  templateUrl: './pcba.component.html',
  styleUrls: ['./pcba.component.css']
})
export class PCBAComponent implements OnInit{
  public getwidth: any;
  public getheight: any;
  iconoVariable: boolean = false;

  constructor(@Inject(PLATFORM_ID) private platformId:Object, private title:Title, private meta:Meta){}

  ngOnInit(){
    if(isPlatformBrowser(this.platformId)){
      AOS.init();
      window.addEventListener('load', AOS.refresh);
      this.getwidth = window.innerWidth;
      this.getheight = window.innerHeight
      this.title.setTitle("Ensamble de Placas de Circuito Impreso (PCBA) | Neurónica");
      this.meta.addTag({name: 'description', content: 'Ofrecemos servicio integral de PCBA: ensamble de tarjetas, suministro de componentes y manufactura de PCB. Asegura fiabilidad en tus productos electrónicos.'});
      this.meta.addTag({name: 'keywords', content: 'PCBA, Ensamble de tarjetas, Suministros electrónicos, PCB, Servicios integrales'});
    }
  }

  @HostListener('window:resize', ['$event'])

  onWindowResize(){
    this.getwidth = window.innerWidth;
    this.getheight = window.innerHeight;
  }
}
