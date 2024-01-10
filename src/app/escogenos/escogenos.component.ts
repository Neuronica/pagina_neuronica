import { Component, HostListener} from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import * as AOS from 'aos';

@Component({
  selector: 'app-escogenos',
  templateUrl: './escogenos.component.html',
  styleUrls: ['./escogenos.component.css']
})
export class EscogenosComponent {
  public getwidth: any;
  public getheight: any;

  constructor(private title:Title, private meta:Meta){ }

  ngOnInit(){
    AOS.init();
    window.addEventListener('load', AOS.refresh);
    this.getwidth = window.innerWidth;
    this.getheight = window.innerHeight;
    this.title.setTitle("Neurónica S.A.S: Ingeniería a la Medida para Empresas y Hogares del Futuro");
    this.meta.addTag({name: 'description', content: 'Descubre en Neurónica S.A.S un proyecto visionario dedicado a instaurar las tecnologías de la cuarta revolución industrial en el tejido empresarial actual. Con ingenieros altamente capacitados en ingeniería mecánica y electrónica, ofrecemos soluciones y productos que trascienden lo convencional. Desde la creación hasta el mantenimiento y las actualizaciones, nos comprometemos a brindar una experiencia excepcional, fusionando innovación, pasión y un compromiso indeclinable con la excelencia. Únete a nosotros en la creación de un futuro empresarial y doméstico confiado y determinado.'});
    this.meta.addTag({name: 'keywords', content: 'Ingeniería a medida Bogotá, Revolución industrial, Sector empresarial innovador, Ingeniería mecánica y electrónica, Enfoque holístico al cliente, Mantenimiento y actualizaciones, Relación calidad-valor, Innovación y pasión, Fuerza impulsora empresarial.'});
  }

  @HostListener('window:resize', ['$event'])

  onWindowResize(){
    this.getwidth = window.innerWidth;
    this.getheight = window.innerHeight;
  }

}