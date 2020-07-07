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
    this.navbarService.routesTop.subscribe(
      (param: string) => {
        (this.navbarService.routesStack.length > 1)? this.isEnabledArrowBack = true : this.isEnabledArrowBack = false;
        console.log(this.router.url);
        if (this.navbarService.routesStack[this.navbarService.routesStack.length-1] === "/playlists") {
          this.isEnabledAddChannel = false;
          this.isEnabledAddPlaylist = true;
          this.isEnabledChannelList = false;
        }
        //no hay otra situacion
        else{
          this.isEnabledAddChannel = true;
          this.isEnabledAddPlaylist = false;
          this.isEnabledChannelList = true;
        }
      }
    ); console.log("app-navbar constructor");
  }

  ngOnInit(): void {
    this.navbarService.addRoute("/playlists");
    console.log("/playlists added"); 
    console.log("app-navbar oninit");
  }

  onAddChannel(): void {
    if (this.navbarService.topRoute() != "/addChannel") {
      this.router.navigate([this.router.url + "/addChannel"]);
    }
  }

  onAddPlaylist(): void {
    if (this.navbarService.topRoute() != "/addPlaylist") {
      this.router.navigate(["/playlists/addPlaylist"]);
    }
  }

  back(): void {
    this.navbarService.removeRoute();
  }
}
