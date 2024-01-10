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
    this.getheight = window.innerHeight;
    this.title.setTitle("Neurónica S.A.S - Ingeniería a la Medida en Bogotá");
    this.meta.addTag({name: 'description', content: 'Descubre Neurónica, tu aliado confiable en ingeniería a la medida en Bogotá. Soluciones integrales en software, hardware, telecomunicaciones y manufactura ajustadas a tus necesidades y presupuesto'});
    this.meta.addTag({name: 'keywords', content: 'Neurónica, Ingeniería a medida, Bogotá, Neuronica'});
  }

  @HostListener('window:resize', ['$event'])

  onWindowResize(){
    this.getwidth = window.innerWidth;
    this.getheight = window.innerHeight;
  }
}

