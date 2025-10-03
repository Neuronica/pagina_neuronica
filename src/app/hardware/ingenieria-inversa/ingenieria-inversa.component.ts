import { Component, HostListener, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';
import * as AOS from 'aos';

@Component({
    selector: 'app-ingenieria-inversa',
    templateUrl: './ingenieria-inversa.component.html',
    styleUrls: ['./ingenieria-inversa.component.css'],
    standalone: false
})

export class IngenieriaInversaComponent implements OnInit{

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
      this.title.setTitle("Ingeniería Inversa en Bogotá: Adaptamos Tecnologías Existentes a tus Necesidades | Neurónica");
      this.meta.addTag({name: 'description', content: 'Aprovecha la ingeniería inversa para optimizar dispositivos, reducir costos y migrar a nuevas tecnologías. Con Neurónica, transforma hardware y software existentes según tus requerimientos.'});
      this.meta.addTag({name: 'keywords', content: 'Neurónica, Ingeniería inversa, Migración de tecnologías, Adaptabilidad, Ingeniería a la medida, Bogotá'});
    }
  }

  @HostListener('window:resize', ['$event'])

  onWindowResize(){
    this.getwidth = window.innerWidth;
    this.getheight = window.innerHeight;
  }
}
