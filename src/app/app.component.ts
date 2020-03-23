import { Component, OnInit  } from '@angular/core';
import { NavigatorBarService } from './services/navigator-service.service';

@Component({
  selector: 'home',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Home';

  constructor() {
    console.log("app-module constructor");
  }

  ngOnInit(): void {
    console.log("app-modulo oninit");
  }
  
}
