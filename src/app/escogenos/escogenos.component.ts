import { Component } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-escogenos',
  templateUrl: './escogenos.component.html',
  styleUrls: ['./escogenos.component.css']
})
export class EscogenosComponent {

  ngOnInit(){
    AOS.init();
    window.addEventListener('load', AOS.refresh);
  }

}

