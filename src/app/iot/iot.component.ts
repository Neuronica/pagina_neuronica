import { Component, HostListener, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { Title, Meta} from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';
import * as AOS from 'aos';

@Component({
  selector: 'app-cableado',
  templateUrl: './iot.component.html',
  styleUrls: ['./iot.component.css']
})
export class IotComponent implements OnInit {
  public getwidth: any;
  public getheight: any;
  iconoVariable: boolean = false;

  constructor(@Inject(PLATFORM_ID) private platformId:Object,private title:Title, private meta:Meta){}

  ngOnInit(){
    if(isPlatformBrowser(this.platformId)){
      AOS.init();
      window.addEventListener('load', AOS.refresh);
      this.getwidth = window.innerWidth;
      this.getheight = window.innerHeight;
      this.title.setTitle("Soluciones IoT en Bogotá | Neurónica");
      this.meta.addTag({name: 'description', content: 'Próximamente habilitaremos nuestro servicio de IoT, integrando redes de sensores y conectividad avanzada para impulsar la eficiencia de tu negocio.'});
      this.meta.addTag({name: 'keywords', content: 'IoT Bogotá'});
      this.meta.addTag({name: 'robots', content: 'index'});
    }
  }

  @HostListener('window:resize', ['$event'])

  onWindowResize(){
    this.getwidth = window.innerWidth;
    this.getheight = window.innerHeight;
  }
}
