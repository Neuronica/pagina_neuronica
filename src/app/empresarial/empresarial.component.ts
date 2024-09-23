import { Component, HostListener, Inject, PLATFORM_ID, OnInit} from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';
import * as AOS from 'aos';

@Component({
  selector: 'app-empresarial',
  templateUrl: './empresarial.component.html',
  styleUrls: ['./empresarial.component.css']
})
export class EmpresarialComponent implements OnInit{
  public getwidth: any;
  public getheight: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private title:Title, private meta:Meta){ }

  ngOnInit(){
    if(isPlatformBrowser(this.platformId)){
      AOS.init();
      window.addEventListener('load', AOS.refresh);
      this.getwidth = window.innerWidth;
      this.getheight = window.innerHeight;
      this.title.setTitle("Ingeniería Empresarial en Neurónica: Potenciando la Eficiencia y Crecimiento Empresarial");
      this.meta.addTag({name: 'description', content: 'Transformamos empresas en entidades más eficientes y vibrantes en Neurónica. Como tu socio estratégico, ponemos las tecnologías más avanzadas a tu disposición para solventar desafíos, optimizar operaciones y fomentar el crecimiento. Desde cableado estructurado hasta software a medida y servicios de impresión 3D, aplicamos innovación y precisión en cada proyecto. Descubre cómo Neurónica puede potenciar tu empresa con soluciones a la medida que impulsan el éxito empresarial.'});
      this.meta.addTag({name: 'keywords', content: 'Ingeniería empresarial Bogotá, Cableado estructurado Neurónica, Software a medida empresas, Diseño electrónico y prototipado, Impresión 3D personalizada, Eficiencia operativa, Innovación en empresas, Tecnologías avanzadas, Crecimiento empresarial.'});
    }
  }

  @HostListener('window:resize', ['$event'])

  onWindowResize(){
    this.getwidth = window.innerWidth;
    this.getheight = window.innerHeight;
  }

}
