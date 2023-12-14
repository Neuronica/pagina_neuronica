import { Component, HostListener } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';
import * as AOS from 'aos';

@Component({
  selector: 'app-software',
  templateUrl: './software.component.html',
  styleUrls: ['./software.component.css']
})
export class SoftwareComponent {
  public getwidth: any;
  public getheight: any;
  iconoVariable: boolean = false;
  constructor(private title:Title, private meta:Meta){}
  ngOnInit(){
    AOS.init();
    window.addEventListener('load', AOS.refresh);
    this.getwidth = window.innerWidth;
    this.getheight = window.innerHeight
    this.title.setTitle("Desarrollo de Software a la Medida en Bogotá | Neurónica")
  }

  @HostListener('window:resize', ['$event'])

  onWindowResize(){
    this.getwidth = window.innerWidth;
    this.getheight = window.innerHeight;
  }
}
