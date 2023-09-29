import { Component, HostListener} from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-escogenos',
  templateUrl: './escogenos.component.html',
  styleUrls: ['./escogenos.component.css']
})
export class EscogenosComponent {
  public getwidth: any;
  public getheight: any;
  ngOnInit(){
    AOS.init();
    window.addEventListener('load', AOS.refresh);
    this.getwidth = window.innerWidth;
    this.getheight = window.innerHeight
  }

  @HostListener('window:resize', ['$event'])

  onWindowResize(){
    this.getwidth = window.innerWidth;
    this.getheight = window.innerHeight;
  }

}