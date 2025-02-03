import { Component, HostListener, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';
import * as AOS from 'aos';

@Component({
  selector: 'app-hardware',
  templateUrl: './hardware.component.html',
  styleUrls: ['./hardware.component.css']
})
export class HardwareComponent implements OnInit{
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
      this.title.setTitle("Diseño y Desarrollo Electrónico en Bogotá | Neurónica");
      this.meta.addTag({name: 'description', content: 'Explora servicios integrales de ingeniería en Bogotá. En Neurónica convertimos tus ideas en soluciones tecnológicas con PCB, PCBA y prototipado rápido. '});
      this.meta.addTag({name: 'keywords', content: 'Explora servicios integrales de ingeniería en Bogotá. En Neurónica convertimos tus ideas en soluciones tecnológicas con PCB, PCBA y prototipado rápido.'});
    }
  }

  @HostListener('window:resize', ['$event'])

  onWindowResize(){
    this.getwidth = window.innerWidth;
    this.getheight = window.innerHeight;
  }

}

