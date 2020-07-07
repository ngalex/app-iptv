import { __decorate } from "tslib";
import { Injectable, EventEmitter } from '@angular/core';
let NavigatorBarService = class NavigatorBarService {
    constructor(router) {
        this.router = router;
        this.routesStack = [];
        this.routesTop = new EventEmitter();
        console.log("app-navbarservice constructor");
    }
    addRoute(route) {
        this.routesStack.push(route);
        this.routesTop.emit(this.topRoute());
    }
    removeRoute() {
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
    topRoute() {
        if (this.routesStack.length > 0)
            return this.routesStack[this.routesStack.length - 1];
        else
            return "";
    }
    clearRoutes() {
        this.routesStack = [];
    }
    toString() {
        let route = "";
        this.routesStack.forEach(section => {
            route += section;
        });
        return route;
    }
};
NavigatorBarService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], NavigatorBarService);
export { NavigatorBarService };
//# sourceMappingURL=navigator-service.service.js.map