import { Component, HostListener, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';
import * as AOS from 'aos';

@Component({
    selector: 'app-pcb',
    templateUrl: './pcb.component.html',
    styleUrls: ['./pcb.component.css'],
    standalone: false
})
export class PCBComponent implements OnInit{
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
      this.title.setTitle("Diseño y Manufactura de PCB | Neurónica");
      this.meta.addTag({name: 'description', content: 'Especialistas en placas de circuito impreso: diseñamos y fabricamos PCB para optimizar tus productos electrónicos. Calidad y soporte integral asegurados.'});
      this.meta.addTag({name: 'keywords', content: 'Neurónica, Diseño de PCB, Placas electrónicas, Placas de circuito impreso'});
    }
  }

  @HostListener('window:resize', ['$event'])

  onWindowResize(){
    this.getwidth = window.innerWidth;
    this.getheight = window.innerHeight;
  }
}
