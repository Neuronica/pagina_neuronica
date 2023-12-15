import { Component, HostListener } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';
import * as AOS from 'aos';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent {
  public getwidth: any;
  public getheight: any;
  iconoVariable: boolean = false;

  constructor(private title:Title, private meta:Meta){}

  ngOnInit(){
    AOS.init();
    window.addEventListener('load', AOS.refresh);
    this.getwidth = window.innerWidth;
    this.getheight = window.innerHeight;
    this.title.setTitle("Ingeniería a Medida en Bogotá | Neurónica");
    this.meta.addTag({name: 'description', content: 'Descubre la esencia de Neurónica S.A., empresa de ingeniería a medida en Bogotá. Nos destacamos en soluciones personalizadas que abarcan IoT, impresión 3D y inteligencia artificial. Nuestra misión es simplificar y apoyar las necesidades de individuos y empresas, integrando tecnologías de punta en software, hardware, telecomunicaciones y manufactura. Con un enfoque centrado en la adaptación precisa, superamos obstáculos para ofrecer soluciones efectivas. Únete a nosotros en esta travesía de excelencia e innovación.'});
    this.meta.addTag({name: 'keywords', content: 'Neurónica S.A. Bogotá, Ingeniería a medida, Internet de las Cosas Bogotá, Impresión 3D tecnología Inteligencia artificial servicios, Soluciones personalizadas, Líderes en ingeniería Bogotá, Innovación en tecnología Adaptabilidad en ingeniería.'});
  }

  @HostListener('window:resize', ['$event'])

  onWindowResize(){
    this.getwidth = window.innerWidth;
    this.getheight = window.innerHeight;
  }
}
