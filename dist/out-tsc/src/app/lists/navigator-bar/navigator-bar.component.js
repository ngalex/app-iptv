import { __decorate } from "tslib";
import { Component } from '@angular/core';
let NavigatorBarComponent = class NavigatorBarComponent {
    constructor(_location, router, navbarService) {
        this._location = _location;
        this.router = router;
        this.navbarService = navbarService;
        this.navbarService.routesTop.subscribe((param) => {
            (this.navbarService.routesStack.length < 2) ? this.isEnabledArrowBack = false : this.isEnabledArrowBack = true;
            if (this.navbarService.isActivePlaylistsEditor && !this.navbarService.isActiveChannelEditor) {
                this.isEnabledAddChannel = false;
                this.isEnabledAddPlaylist = true;
                this.isEnabledChannelList = false;
            }
            //no hay otra situacion
            else {
                this.isEnabledAddChannel = true;
                this.isEnabledAddPlaylist = false;
                this.isEnabledChannelList = true;
            }
        });
        console.log("app-navbar constructor");
    }
    ngOnInit() {
        this.navbarService.clearRoutes();
        this.navbarService.addRoute("/playlists");
        console.log("/playlists added");
        console.log("app-navbar oninit");
    }
    onAddChannel() {
        if (this.navbarService.topRoute() != "/addChannel") {
            this.router.navigate([this.router.url + "/addChannel"]);
        }
    }
    onAddPlaylist() {
        if (this.navbarService.topRoute() != "/addPlaylist") {
            this.router.navigate(["/playlists/addPlaylist"]);
        }
    }
    back() {
        this.navbarService.removeRoute();
    }
};
NavigatorBarComponent = __decorate([
    Component({
        selector: 'app-navigator-bar',
        templateUrl: './navigator-bar.component.html',
        styleUrls: ['./navigator-bar.component.css']
    })
], NavigatorBarComponent);
export { NavigatorBarComponent };
//# sourceMappingURL=navigator-bar.component.js.map