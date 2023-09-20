import { Component} from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-nmenu',
  templateUrl: './nmenu.component.html',
  styleUrls: ['./nmenu.component.css']
})
export class NmenuComponent{

  ngOnInit(){
    AOS.init()
    window.addEventListener('load', AOS.refresh)

  }

}
