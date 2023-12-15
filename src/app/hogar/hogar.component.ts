import { Component, HostListener} from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import * as AOS from 'aos';

@Component({
  selector: 'app-hogar',
  templateUrl: './hogar.component.html',
  styleUrls: ['./hogar.component.css']
})
export class HogarComponent {
  public getwidth: any;
  public getheight: any;

  constructor(private title:Title, private meta:Meta){ }

  ngOnInit(){
    AOS.init();
    window.addEventListener('load', AOS.refresh);
    this.getwidth = window.innerWidth;
    this.getheight = window.innerHeight;
    this.title.setTitle("Ingeniería para Hogar en Bogotá | CCTV y Domótica");
    this.meta.addTag({name: 'description', content: 'Explora la ingeniería para hogar de Neurónica en Bogotá, brindando servicios que mejoran la comodidad y seguridad de tu hogar. Descubre la excelencia en seguridad con nuestro servicio de CCTV, ofreciendo soluciones avanzadas para proteger lo que más valoras. Transforma tus ideas en realidad con nuestra domótica personalizada, convirtiendo tu hogar en un espacio innovador y cómodo. ¡Haz de Neurónica tu socio en la creación de un hogar más seguro y tecnológicamente avanzado!.'});
    this.meta.addTag({name: 'keywords', content: 'Ingeniería para hogar Bogotá, Servicio CCTV Neurónica, Seguridad para hogares, Domótica personalizada Bogotá, Proyectos de domótica, Innovación en hogares, Comodidad y seguridad, Tecnología para el hogar.'});
  }

  @HostListener('window:resize', ['$event'])

  onWindowResize(){
    this.getwidth = window.innerWidth;
    this.getheight = window.innerHeight;
  }
}
