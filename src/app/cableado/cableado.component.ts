import { Component, HostListener } from '@angular/core';
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

  ngOnInit(){
    AOS.init();
    window.addEventListener('load', AOS.refresh);
    this.getwidth = window.innerWidth;
    this.getheight = window.innerHeight
  }

  @HostListener('window:resize', ['$event'])

  onWindowResize(){
    this.getwidth = window.innerWidth;
    this.getheight = window.innerHeight;
  }
}
