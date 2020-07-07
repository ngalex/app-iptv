import { __decorate } from "tslib";
import { Component } from '@angular/core';
let ChannelEditorComponent = class ChannelEditorComponent {
    constructor(plService, chnService, route, navbarService, _snackBar) {
        this.plService = plService;
        this.chnService = chnService;
        this.route = route;
        this.navbarService = navbarService;
        this._snackBar = _snackBar;
        this.selectedChannel = null;
        this.enableEdit = false;
        console.log("app-channeleditor constructor");
        this.navbarService.isActiveChannelEditor = true;
        this.route.paramMap.subscribe((params) => {
            this.index = +params.get('id');
            this.plService.selectedPlaylist = this.index;
            this.channels = this.chnService.getChannels(this.index);
            this.navbarService.addRoute("/" + this.index);
            console.log("/id added: " + this.index);
            console.log(this.navbarService.routesStack.length);
            //this.index = this.route.snapshot.params['id'];
        });
    }
    ngOnInit() {
        console.log("app-channeleditor oninit");
        this.chn$ = this.chnService.getChannels$();
        this.chn$.subscribe(() => this.channels = this.chnService.getChannels(this.index));
    }
    ngOnDestroy() {
        this.navbarService.isActiveChannelEditor = false;
    }
    onAdd(channel) {
        this.chnService.addChannel(channel);
    }
    onEnableEdition(i) {
        this.selectedChannel = i;
        this.enableEdit = true;
    }
    onChangeUrl(chn, urlInput) {
        chn.Url = urlInput.value;
        this.chnService.changeChannel(chn);
        this.selectedChannel = null;
        this.enableEdit = false;
        this.openSnackBar("URL cambiada correctamente", "Cerrar");
    }
    onRemove(id) {
        this.chnService.removeChannel(id);
        this.openSnackBar("Eliminado", "Cerrar");
    }
    openSnackBar(message, action) {
        this._snackBar.open(message, action, {
            duration: 2000,
        });
    }
    onOpenUrl(i) {
        window.location.href = this.channels[i].Url;
    }
};
ChannelEditorComponent = __decorate([
    Component({
        selector: 'app-channel-editor',
        templateUrl: './channel-editor.component.html',
        styleUrls: ['./channel-editor.component.css']
    })
], ChannelEditorComponent);
export { ChannelEditorComponent };
//# sourceMappingURL=channel-editor.component.js.map