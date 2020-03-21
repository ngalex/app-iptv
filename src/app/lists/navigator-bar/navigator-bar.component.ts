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

  constructor(private _location: Location,
              private router: Router,
              private navbarService: NavigatorBarService) {
  }

  ngOnInit(): void {
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

  onAddChannel(): void {
    let routerTop = this.navbarService.routesStack[this.navbarService.routesStack.length - 1];
    if (routerTop != "/add") {
      this.router.navigate([this.router.url + "/add"]);
      this.navbarService.addRoute("/add");
    }
  }

  onAddPlaylist(): void {
    let routerTop = this.navbarService.routesStack[this.navbarService.routesStack.length - 1];
    if (routerTop != "/add") {
      this.router.navigate(["/playlists/add"]);
      this.navbarService.addRoute("/add");
    }
  }

  back(): void {
    this.navbarService.removeRoute();
    this._location.back();
  }
}
