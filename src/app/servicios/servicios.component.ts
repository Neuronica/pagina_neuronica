import { Component } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent {

  ngOnInit(){
    AOS.init();
    window.addEventListener('load', AOS.refresh);
  }

}
