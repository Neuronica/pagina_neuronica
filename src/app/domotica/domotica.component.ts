import { Component, HostListener, inject, PLATFORM_ID, OnInit, Inject} from '@angular/core';
import { Title, Meta} from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';
import * as AOS from 'aos';

@Component({
  selector: 'app-domotica',
  templateUrl: './domotica.component.html',
  styleUrls: ['./domotica.component.css']
})
export class DomoticaComponent  implements OnInit{
  public getwidth: any;
  public getheight: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object ,private title:Title, private meta:Meta){}

  ngOnInit(){
    if(isPlatformBrowser(this.platformId)){
      AOS.init();
      window.addEventListener('load', AOS.refresh);
      this.getwidth = window.innerWidth;
      this.getheight = window.innerHeight;
      this.title.setTitle("Vive el Futuro con Nuestra Domótica Personalizada en Bogotá");
      this.meta.addTag({name: 'description', content: 'En Neurónica, llevamos la tecnología e innovación directamente a tu hogar con nuestra domótica personalizada en Bogotá. Descubre los beneficios de control remoto, eficiencia energética, seguridad avanzada y adaptabilidad personalizada. Desde iluminación inteligente hasta automatización de cortinas, diseñamos soluciones que se ajustan a tu estilo de vida. Transforma tu hogar en un espacio inteligente y eficiente con los proyectos a medida de Neurónica. ¡Contáctanos y experimenta el futuro de la ingeniería aplicada a tu vida diaria!'});
      this.meta.addTag({name: 'keywords', content: 'Domótica personalizada Bogotá, Tecnología e innovación en el hogar, Transformación a espacio inteligente, Ingeniería en Bogotá, Control remoto del hogar, Eficiencia energética domótica, Seguridad avanzada para hogares, Adaptabilidad personalizada en ingeniería, Ejemplos de domótica.'});
    }
  }

  @HostListener('window:resize', ['$event'])

  onWindowResize(){
    this.getwidth = window.innerWidth;
    this.getheight = window.innerHeight;
  }
}
