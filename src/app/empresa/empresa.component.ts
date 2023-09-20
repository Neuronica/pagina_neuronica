import { Component } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent {

  ngOnInit(){
    AOS.init();
    window.addEventListener('load', AOS.refresh);
  }

}
