import { Component } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  ngOnInit(){
    AOS.init();
    window.addEventListener('load', AOS.refresh);
  }
}
