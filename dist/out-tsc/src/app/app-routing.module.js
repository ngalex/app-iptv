import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ModIptvListComponent } from './lists/mod-iptv-list/mod-iptv-list.component';
import { ChannelEditorComponent } from './channels/channel-editor/channel-editor.component';
import { ChannelCreateComponent } from './channels/channel-create/channel-create.component';
import { ListCreateComponent } from './lists/list-create/list-create.component';
const routes = [
    {
        path: 'playlists', component: ModIptvListComponent, data: { animation: 'playlists' }, children: [
            { path: 'addPlaylist', component: ListCreateComponent }
        ]
    },
    {
        path: 'playlists/:id', component: ChannelEditorComponent, data: { animation: 'channels' }, children: [
            { path: 'addChannel', component: ChannelCreateComponent }
        ]
    },
    { path: '', redirectTo: '/playlists', pathMatch: 'full' },
    { path: '**', redirectTo: '/playlists', pathMatch: 'full' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes, {
                enableTracing: false,
                paramsInheritanceStrategy: "always",
                useHash: true
            })],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map