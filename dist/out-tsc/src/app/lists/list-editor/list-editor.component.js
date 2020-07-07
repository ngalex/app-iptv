import { __decorate } from "tslib";
import { Component, Output, EventEmitter } from '@angular/core';
import { Playlist } from '../../models/Playlist';
let ListEditorComponent = class ListEditorComponent {
    constructor() {
        this.disablePlaylistEditor = new EventEmitter();
        this.changedPlaylist = new Playlist(-1, "test", "test", 0);
    }
    ngOnInit() {
    }
    setPlaylist() {
        this.disablePlaylistEditor.emit(false);
    }
    onCancel() {
        this.disablePlaylistEditor.emit(false);
    }
};
__decorate([
    Output()
], ListEditorComponent.prototype, "disablePlaylistEditor", void 0);
ListEditorComponent = __decorate([
    Component({
        selector: 'app-list-editor',
        templateUrl: './list-editor.component.html',
        styleUrls: ['./list-editor.component.css']
    })
], ListEditorComponent);
export { ListEditorComponent };
//# sourceMappingURL=list-editor.component.js.map