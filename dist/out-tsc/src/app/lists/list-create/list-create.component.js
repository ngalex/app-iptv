import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Playlist } from 'src/app/models/Playlist';
let ListCreateComponent = class ListCreateComponent {
    constructor(_location, navbarService, plService, _snackBar) {
        this._location = _location;
        this.navbarService = navbarService;
        this.plService = plService;
        this._snackBar = _snackBar;
        //this.navbarService.addRoute("/addPlaylist");
        //console.log("/addPlaylist added");
    }
    ngOnInit() {
        this.newPlaylist = new Playlist(-1, "", "", 0);
    }
    onCreate() {
        this.newPlaylist.Name = this.nameInput;
        this.plService.addPlaylist(this.newPlaylist);
        this.openSnackBar("Lista creada: " + this.newPlaylist.Name, "Cerrar");
        this.navbarService.removeRoute();
    }
    onCancel() {
        this.navbarService.removeRoute();
    }
    openSnackBar(message, action) {
        this._snackBar.open(message, action, {
            duration: 2000,
        });
    }
};
ListCreateComponent = __decorate([
    Component({
        selector: 'app-list-create',
        templateUrl: './list-create.component.html',
        styleUrls: ['./list-create.component.css']
    })
], ListCreateComponent);
export { ListCreateComponent };
//# sourceMappingURL=list-create.component.js.map