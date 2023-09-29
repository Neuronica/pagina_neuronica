import { Component, HostListener} from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-empresarial',
  templateUrl: './empresarial.component.html',
  styleUrls: ['./empresarial.component.css']
})
export class EmpresarialComponent {
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
