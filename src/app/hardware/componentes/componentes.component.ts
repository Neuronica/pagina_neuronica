import { Component, HostListener, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';
import * as AOS from 'aos';

@Component({
    selector: 'app-componentes',
    templateUrl: './componentes.component.html',
    styleUrls: ['./componentes.component.css'],
    standalone: false
})
export class ComponentesComponent implements OnInit{

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
      this.title.setTitle("Suministro de Componentes Electrónicos | Neurónica");
      this.meta.addTag({name: 'description', content: 'Accede a componentes de calidad a través de proveedores internacionales. En Neurónica garantizamos disponibilidad, precios competitivos y entrega confiable.'});
      this.meta.addTag({name: 'keywords', content: 'Suministro de componentes electrónicos, Importación de componentes, Proveedores electrónicos, Logística de componentes'});
    }
  }

  @HostListener('window:resize', ['$event'])

  onWindowResize(){
    this.getwidth = window.innerWidth;
    this.getheight = window.innerHeight;
  }
}
