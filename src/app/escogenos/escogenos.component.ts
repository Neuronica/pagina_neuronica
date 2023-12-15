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
    this.title.setTitle("Ingeniería a Medida en Bogotá | Neurónica S.A.S");
    this.meta.addTag({name: 'description', content: 'Descubre por qué Neurónica S.A.S es la elección destacada en ingeniería a medida en Bogotá. Como pioneros en la cuarta revolución industrial, revitalizamos el sector empresarial y llevamos innovación a cada hogar. Nuestro equipo altamente capacitado en ingeniería mecánica y electrónica se compromete con la creación de productos y soluciones excepcionales. Ofrecemos un enfoque holístico centrado en el cliente, garantizando un funcionamiento óptimo, mantenimiento en conformidad con normativas e actualizaciones oportunas. Únete a Neurónica para formar parte de una fuerza impulsora que abraza el futuro con confianza y determinación.'});
    this.meta.addTag({name: 'keywords', content: 'Ingeniería a medida Bogotá, Revolución industrial, Sector empresarial innovador, Ingeniería mecánica y electrónica, Enfoque holístico al cliente, Mantenimiento y actualizaciones, Relación calidad-valor, Innovación y pasión, Fuerza impulsora empresarial.'});
  }

  @HostListener('window:resize', ['$event'])

  onWindowResize(){
    this.getwidth = window.innerWidth;
    this.getheight = window.innerHeight;
  }

}