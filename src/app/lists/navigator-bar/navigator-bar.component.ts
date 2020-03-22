import { Component, OnInit } from '@angular/core';
import { NavigatorBarService } from 'src/app/services/navigator-service.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-navigator-bar',
  templateUrl: './navigator-bar.component.html',
  styleUrls: ['./navigator-bar.component.css']
})
export class NavigatorBarComponent implements OnInit {
  isEnabledChannelList: boolean;
  isEnabledAddChannel: boolean;
  isEnabledAddPlaylist: boolean;
  isEnabledArrowBack: boolean;
  //routes: string[];

  constructor(private _location: Location,
    private router: Router,
    private navbarService: NavigatorBarService) {
    //this.routes = this.navbarService.routesStack;    
    this.navbarService.routesTop.subscribe(
      (param: string) => {
        if (param == "/playlists") {
          this.isEnabledArrowBack = false;
          this.isEnabledAddChannel = false;
          this.isEnabledAddPlaylist = true;
          this.isEnabledChannelList = false;
        }
        else {
          this.isEnabledArrowBack = true;
          this.isEnabledAddChannel = true;
          this.isEnabledAddPlaylist = false;
          this.isEnabledChannelList = true;
        }
      }
    );
  }

  ngOnInit(): void {
  }

  onAddChannel(): void {
    if (this.navbarService.topRoute() != "/add") {
      this.router.navigate([this.router.url + "/add"]);
    }
  }

  onAddPlaylist(): void {
    if (this.navbarService.topRoute() != "/add") {
      this.router.navigate(["/playlists/add"]);
    }
  }

  back(): void {
    this.navbarService.removeRoute();
    //this._location.back();
  }
}
