import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Channel } from 'src/app/models/Channel';
let ChannelCreateComponent = class ChannelCreateComponent {
    constructor(_location, navbarService, plService, chnService, _snackBar) {
        this._location = _location;
        this.navbarService = navbarService;
        this.plService = plService;
        this.chnService = chnService;
        this._snackBar = _snackBar;
        this.newChannel = new Channel(-1, -1, "");
        //this.navbarService.addRoute("/addChannel");
        //console.log("/addChannel added");
    }
    ngOnInit() {
    }
    onCreate() {
        this.newChannel.IdPlaylist = this.plService.selectedPlaylist;
        this.newChannel.Url = this.urlInput;
        this.chnService.addChannel(this.newChannel);
        this.openSnackBar("Canal creado (" + this.newChannel.Id + ")", "Cerrar");
        this.navbarService.removeRoute();
    }
    openSnackBar(message, action) {
        this._snackBar.open(message, action, {
            duration: 2000,
        });
    }
    onCancel() {
        this.navbarService.removeRoute();
    }
};
ChannelCreateComponent = __decorate([
    Component({
        selector: 'app-channel-create',
        templateUrl: './channel-create.component.html',
        styleUrls: ['./channel-create.component.css']
    })
], ChannelCreateComponent);
export { ChannelCreateComponent };
//# sourceMappingURL=channel-create.component.js.map