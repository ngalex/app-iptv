import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { NavigatorBarService } from './services/navigator-service.service';

@Component({
  selector: 'home',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Home';

  constructor(private navbarService: NavigatorBarService) {
     
  }

  ngOnInit(): void {
    this.navbarService.clearRoutes();
    this.navbarService.addRoute("/playlists");
    console.log("/playlists added"); 
  }
  
}
