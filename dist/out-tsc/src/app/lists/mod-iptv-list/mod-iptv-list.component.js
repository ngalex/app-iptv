import { __decorate } from "tslib";
import { Component } from '@angular/core';
let ModIptvListComponent = class ModIptvListComponent {
    constructor(navbarService, plService, router, _snackBar) {
        this.navbarService = navbarService;
        this.plService = plService;
        this.router = router;
        this._snackBar = _snackBar;
        this.navbarService.isActivePlaylistsEditor = true;
        console.log("app-iptvlist constructor");
        console.log(this.navbarService.routesStack.length);
    }
    ngOnInit() {
        console.log("app-iptvlist oninit");
        this.playlists = this.plService.playlistSource;
        if (window.screen.width <= 360) { // 768px portrait
            this.isMobile = true;
        }
        else
            this.isMobile = false;
    }
    ngOnDestroy() {
        this.navbarService.isActivePlaylistsEditor = false;
    }
    onEditPlaylist(pl) {
        this.onSelectPlaylist(pl.Id);
        this.nameInput = pl.Name;
        this.enableEdit = true;
    }
    onEditChannel(pl) {
        this.plService.selectedPlaylist = this.selectedPlaylist;
        this.router.navigate(['playlists/' + pl.Id]);
    }
    onSelectPlaylist(id) {
        this.selectedPlaylist = id;
    }
    onSavePlaylist(pl) {
        pl.Name = this.nameInput;
        this.plService.changePlaylist(pl);
        this.selectedPlaylist = null;
        this.openSnackBar("Guardado", "Cerrar");
    }
    onDelete(id) {
        this.plService.removePlaylist(id);
        this.openSnackBar("Eliminado", "Cerrar");
    }
    openSnackBar(message, action) {
        this._snackBar.open(message, action, {
            duration: 2000,
        });
    }
};
ModIptvListComponent = __decorate([
    Component({
        selector: 'app-mod-iptv-list',
        templateUrl: './mod-iptv-list.component.html',
        styleUrls: ['./mod-iptv-list.component.css']
    })
], ModIptvListComponent);
export { ModIptvListComponent };
//# sourceMappingURL=mod-iptv-list.component.js.map