import { Component, HostListener } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';
import * as Aos from 'aos';
import * as AOS from 'aos';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  public getwidth: any;
  public getheight: any;

  constructor(private title:Title, private meta:Meta){}

  ngOnInit(){
    AOS.init();
    window.addEventListener('load', AOS.refresh);
    this.getwidth = window.innerWidth;
    this.getheight = window.innerHeight
    this.title.setTitle("Neurónica | Ingeniería a la medida");
  }

  @HostListener('window:resize', ['$event'])

  onWindowResize(){
    this.getwidth = window.innerWidth;
    this.getheight = window.innerHeight;
  }
}

