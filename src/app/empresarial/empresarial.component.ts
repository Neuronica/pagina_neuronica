import { Component, HostListener} from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import * as AOS from 'aos';

@Component({
  selector: 'app-empresarial',
  templateUrl: './empresarial.component.html',
  styleUrls: ['./empresarial.component.css']
})
export class EmpresarialComponent {
  public getwidth: any;
  public getheight: any;

  constructor(private title:Title, private meta:Meta){ }

  ngOnInit(){
    AOS.init();
    window.addEventListener('load', AOS.refresh);
    this.getwidth = window.innerWidth;
    this.getheight = window.innerHeight;
    this.title.setTitle("Ingeniería Empresarial en Bogotá | Neurónica");
    this.meta.addTag({name: 'description', content: 'Descubre la ingeniería empresarial de Neurónica en Bogotá, impulsando la eficiencia y el crecimiento de empresas. Conecta tu mundo con precisión a través de nuestro servicio de cableado estructurado. Desde el diseño electrónico y prototipado hasta software a medida, transformamos ideas en soluciones únicas. Revoluciona la manufactura con nuestra impresión 3D a medida. En cada proyecto, aplicamos tecnologías avanzadas para asegurar el éxito de nuestros clientes. ¡Innova con nosotros y crea el futuro empresarial con Neurónica.'});
    this.meta.addTag({name: 'keywords', content: 'Ingeniería empresarial Bogotá, Cableado estructurado Neurónica, Software a medida empresas, Diseño electrónico y prototipado, Impresión 3D personalizada, Eficiencia operativa, Innovación en empresas, Tecnologías avanzadas, Crecimiento empresarial.'});
  }

  @HostListener('window:resize', ['$event'])

  onWindowResize(){
    this.getwidth = window.innerWidth;
    this.getheight = window.innerHeight;
  }

}
