import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModIptvListComponent } from './lists/mod-iptv-list/mod-iptv-list.component';
import { ChannelEditorComponent } from './channels/channel-editor/channel-editor.component';
import { ListEditorComponent } from './lists/list-editor/list-editor.component';
import { ChannelCreateComponent } from './channels/channel-create/channel-create.component';

const routes: Routes = [
  { path: '', redirectTo: '/playlists', pathMatch: 'full' }, 
  { path: 'playlists', component: ModIptvListComponent},
  { path: 'playlists/:id', component: ChannelEditorComponent, children: [
    {path: 'agregar', component: ChannelCreateComponent}
  ]},
  { path: '**', redirectTo : '/playlists', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
      enableTracing: true, 
      paramsInheritanceStrategy: "always",
      useHash: true
    }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
