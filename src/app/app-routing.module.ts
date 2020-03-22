import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModIptvListComponent } from './lists/mod-iptv-list/mod-iptv-list.component';
import { ChannelEditorComponent } from './channels/channel-editor/channel-editor.component';
import { ListEditorComponent } from './lists/list-editor/list-editor.component';
import { ChannelCreateComponent } from './channels/channel-create/channel-create.component';
import { ListCreateComponent } from './lists/list-create/list-create.component';

const routes: Routes = [
  { path: 'playlists', component: ModIptvListComponent, children: [
    {path: 'add', component: ListCreateComponent}
  ]},
  { path: 'playlists/:id', component: ChannelEditorComponent,  children: [
    {path: 'add', component: ChannelCreateComponent}
  ]},
  { path: '', redirectTo: '/playlists', pathMatch: 'full' }, 
  { path: '**', redirectTo : '/playlists', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
      enableTracing: false, 
      paramsInheritanceStrategy: "always",
      useHash: true
    }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
