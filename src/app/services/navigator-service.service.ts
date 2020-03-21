import { Injectable, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigatorBarService {
  routesStack: string[]= [];
  routesTop: EventEmitter<string> = new EventEmitter<string>();
  
  constructor() {
  }

  addRoute(route: string){
    this.routesStack.push(route);
    this.routesTop.emit(route);
  }

  removeRoute():void {
    if (this.routesStack.length > 1) {
      this.routesStack.pop();
      this.routesTop.emit(this.routesStack[this.routesStack.length-1]);
    }
  }
}
