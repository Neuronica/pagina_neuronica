import { Component, HostListener } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';
import * as AOS from 'aos';

@Component({
  selector: 'app-hardware',
  templateUrl: './hardware.component.html',
  styleUrls: ['./hardware.component.css']
})
export class HardwareComponent {
  public getwidth: any;
  public getheight: any;
  iconoVariable: boolean = false;

  constructor(private title:Title, private meta:Meta){}

  ngOnInit(){
    AOS.init();
    window.addEventListener('load', AOS.refresh);
    this.getwidth = window.innerWidth;
    this.getheight = window.innerHeight
    this.title.setTitle("Hardware a Medida y Diseño Electrónico en Bogotá: Transformamos Ideas en Realidad Tecnológica");
    this.meta.addTag({name: 'description', content: 'Explora el fascinante mundo del diseño electrónico y prototipado con Neurónica en Bogotá. Descubre cómo convertimos tus ideas en soluciones tangibles mediante hardware a medida. Nuestra experiencia y creatividad se combinan para ofrecer personalización precisa, iteraciones eficientes y rendimiento destacado. Desde componentes simples hasta sistemas embebidos, somos tu socio de confianza en innovación y tecnología. Transforma tus ideas en realidad con Neurónica.'});
    this.meta.addTag({name: 'keywords', content: 'Diseño electrónico y prototipado Bogotá, Hardware a medida, Soluciones de ingeniería electrónica, Beneficios del diseño electrónico personalizado, Iteraciones eficientes en prototipado, Eficiencia y rendimiento del hardware a medida.'});
  }

  @HostListener('window:resize', ['$event'])

  onWindowResize(){
    this.getwidth = window.innerWidth;
    this.getheight = window.innerHeight;
  }

}

