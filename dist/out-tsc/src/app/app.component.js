import { __decorate } from "tslib";
import { Component, HostBinding } from '@angular/core';
import { slideInAnimation } from './animations';
let AppComponent = class AppComponent {
    constructor(overlay) {
        this.overlay = overlay;
        this.title = 'Home';
        console.log("app-module constructor");
    }
    ngOnInit() {
        console.log("app-modulo oninit");
    }
    getAnimationData(outlet) {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    }
    setTheme(event) {
        if (event) {
            this.overlay.getContainerElement().classList.add('dark-theme');
            this.componentClass = 'dark-theme';
        }
        else {
            this.overlay.getContainerElement().classList.add('light-theme');
            this.componentClass = 'light-theme';
        }
    }
};
__decorate([
    HostBinding('class')
], AppComponent.prototype, "componentClass", void 0);
AppComponent = __decorate([
    Component({
        selector: 'home',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css'],
        animations: [slideInAnimation]
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map