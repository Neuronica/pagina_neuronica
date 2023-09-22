import { Component } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-hogar',
  templateUrl: './hogar.component.html',
  styleUrls: ['./hogar.component.css']
})
export class HogarComponent {
  ngOnInit(){
    AOS.init();
    window.addEventListener('load', AOS.refresh);
  }
}
