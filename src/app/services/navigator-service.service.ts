import { Injectable, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigatorBarService {
  isActivePlaylistsEditor: boolean;
  isActiveChannelEditor: boolean;
  routesStack: string[]= [];
  routesTop: EventEmitter<string> = new EventEmitter<string>();
  
  constructor(private router: Router) {
    this.clearRoutes();
    this.isActivePlaylistsEditor = true;
    this.isActiveChannelEditor = false;
    console.log("app-navbarservice constructor");
  }

  addRoute(route: string){
    this.routesStack.push(route);
    this.routesTop.emit(this.topRoute());
  }

  removeRoute():void {
    if (this.routesStack.length > 1) {
      this.routesStack.pop();
      this.routesTop.emit(this.topRoute());
      this.router.navigate([this.toString()]);
    }
  }

  refreshRoute() {
    this.routesTop.emit(this.topRoute());
    this.router.navigate([this.toString()]);
  }

  topRoute(): string {
    if(this.routesStack.length > 0) return this.routesStack[this.routesStack.length-1];
    else return "";
  }

  private clearRoutes():void  {
    this.routesStack = [];
  }

  toString() {
    let route: string = "";
    this.routesStack.forEach(section => {
      route += section;
    });
    return route;
  }
}
