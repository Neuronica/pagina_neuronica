import { Component, HostListener } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';
import * as AOS from 'aos';

@Component({
  selector: 'app-cableado',
  templateUrl: './cableado.component.html',
  styleUrls: ['./cableado.component.css']
})
export class CableadoComponent {
  public getwidth: any;
  public getheight: any;
  iconoVariable: boolean = false;

  constructor(private title:Title, private meta:Meta){}

  ngOnInit(){
    AOS.init();
    window.addEventListener('load', AOS.refresh);
    this.getwidth = window.innerWidth;
    this.getheight = window.innerHeight;
    this.title.setTitle("Cableado estructurado en Bogotá | Neurónica")
  }

  @HostListener('window:resize', ['$event'])

  onWindowResize(){
    this.getwidth = window.innerWidth;
    this.getheight = window.innerHeight;
  }
}
