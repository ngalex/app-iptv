import { Component, OnInit, HostBinding } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { slideInAnimation } from './animations';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideInAnimation]
})
export class AppComponent implements OnInit {
  title = 'Home';
  @HostBinding('class') componentClass: any;
  isDarkTheme: boolean;

  constructor(public overlay: OverlayContainer) {
    console.log("app-module constructor");
  }

  ngOnInit(): void {
    console.log("app-modulo oninit");
  }
  
  getAnimationData(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  setTheme(event: boolean) {
    if (event) {
      this.overlay.getContainerElement().classList.add('dark-theme');
      this.componentClass = 'dark-theme';
    } else { 
      this.overlay.getContainerElement().classList.add('light-theme');
      this.componentClass = 'light-theme';
    }
  }
  
}
