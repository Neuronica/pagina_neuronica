import { Component } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-empresarial',
  templateUrl: './empresarial.component.html',
  styleUrls: ['./empresarial.component.css']
})
export class EmpresarialComponent {

  ngOnInit(){
    AOS.init();
    window.addEventListener('load', AOS.refresh);
  }

}
