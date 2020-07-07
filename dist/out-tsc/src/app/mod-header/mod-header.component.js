import { __decorate } from "tslib";
import { Component, Output, EventEmitter } from '@angular/core';
let ModHeaderComponent = class ModHeaderComponent {
    constructor() {
        this.isDarkTheme = new EventEmitter();
        this.toggled = false;
        console.log("app-header constructor");
    }
    ngOnInit() {
        console.log("app-header oninit");
    }
    onSetTheme() {
        if (!this.toggled) {
            this.isDarkTheme.emit(true);
            this.toggled = true;
        }
        else {
            this.isDarkTheme.emit(false);
            this.toggled = false;
        }
    }
};
__decorate([
    Output()
], ModHeaderComponent.prototype, "isDarkTheme", void 0);
ModHeaderComponent = __decorate([
    Component({
        selector: 'app-mod-header',
        templateUrl: './mod-header.component.html',
        styleUrls: ['./mod-header.component.css']
    })
], ModHeaderComponent);
export { ModHeaderComponent };
//# sourceMappingURL=mod-header.component.js.map