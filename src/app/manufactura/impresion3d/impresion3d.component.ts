import { Component, HostListener, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';
import * as AOS from 'aos';

@Component({
  selector: 'app-impresion3d',
  standalone: false,
  templateUrl: './impresion3d.component.html',
  styleUrl: './impresion3d.component.css'
})
export class Impresion3dComponent  implements OnInit{
  constructor(@Inject(PLATFORM_ID) private platformId:Object, private title:Title, private meta:Meta) {};
  ngOnInit(): void {
      if(isPlatformBrowser(this.platformId)){
        AOS.init();
        window.addEventListener('load', AOS.refresh);
        this.title.setTitle("Servicio de Manufactura en Bogotá | Neurónica");
        this.meta.addTag({name: 'description', content: 'Descubre nuestra gama de tecnologías de manufactura: impresión 3D (FDM, SLA), corte láser y CNC. Transforma tus ideas en prototipos o producciones en serie.'});
        this.meta.addTag({name: 'keywords', content: 'Impresión 3D Bogotá, Tecnología FDM, Tecnología SLA, Láser, CNC, Fresado'});
      }
  }
}
