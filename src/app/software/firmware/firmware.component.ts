import { Component, HostListener, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';
import * as AOS from 'aos';

@Component({
    selector: 'app-firmware',
    templateUrl: './firmware.component.html',
    styleUrls: ['./firmware.component.css'],
    standalone: false
})
export class FirmwareComponent implements OnInit{
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
      this.title.setTitle("Firmware Personalizado en Bogotá | Neurónica");
      this.meta.addTag({name: 'description', content: 'Desarrollamos firmware a bajo nivel para microcontroladores AVR y ARM Cortex-M. Integra hardware y software de alto rendimiento en tus dispositivos.'});
      this.meta.addTag({name: 'keywords', content: 'Firmware personalizado Bogotá, Programación a bajo nivel, Microcontroladores AVR, Microcontroladores ARM Cortex-M'});
    }
  }

  @HostListener('window:resize', ['$event'])

  onWindowResize(){
    this.getwidth = window.innerWidth;
    this.getheight = window.innerHeight;
  }
}
