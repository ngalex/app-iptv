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
  
  constructor(private router: Router) {console.log("app-navbarservice constructor");
  }

  addRoute(route: string){
    this.routesStack.push(route);
    this.routesTop.emit(this.topRoute());
  }

  removeRoute():void {
    //console.log("before:  " + this.toString());
    if (this.routesStack.length > 1) {
      this.routesStack.pop();
      //console.log("after:  " + this.toString());
      this.routesTop.emit(this.topRoute());
      this.router.navigate([this.toString()]);
    }
    /*
    if (this.routesStack.length > 1) {
      this.routesStack.pop();
      this.routesTop.emit(this.routesStack[this.routesStack.length-1]);
    }*/
  }

  topRoute(): string {
    if(this.routesStack.length > 0) return this.routesStack[this.routesStack.length-1];
    else return "";
  }

  clearRoutes() {
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
