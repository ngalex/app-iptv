import { Component, OnInit } from '@angular/core';
import { Playlist } from '../../models/Playlist';
import { Router } from '@angular/router';
import { PlaylistService } from 'src/app/services/playlist/playlist.service';
import { NavigatorBarService } from 'src/app/services/navigator-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-mod-iptv-list',
  templateUrl: './mod-iptv-list.component.html',
  styleUrls: ['./mod-iptv-list.component.css']
})
export class ModIptvListComponent implements OnInit {
  public selectedPlaylist: number;
  public nameInput: string;
  public enableEdit: boolean; 
  public playlists: Playlist[];
  public isMobile: boolean;

  constructor(private navbarService: NavigatorBarService,
              private plService: PlaylistService,
              private router: Router,
              private _snackBar: MatSnackBar) {
                this.navbarService.isActivePlaylistsEditor = true;
                console.log("app-iptvlist constructor");     
                this.navbarService.clearRoutes();
                this.navbarService.addRoute("/playlists");
                console.log("/playlists added"); 
                
  }

  ngOnInit(): void {   console.log("app-iptvlist oninit");
    this.playlists = this.plService.playlistSource;
    if (window.screen.width <= 360) { // 768px portrait
      this.isMobile = true;
    } else this.isMobile = false;
  }

  ngOnDestroy(): void {
    this.navbarService.isActivePlaylistsEditor = false;
  }

  onEditPlaylist(pl: Playlist):void {
    this.onSelectPlaylist(pl.Id);
    this.nameInput = pl.Name;
    this.enableEdit = true;
  }
  onEditChannel(pl: Playlist):void{
    this.plService.selectedPlaylist = this.selectedPlaylist;
    this.router.navigate(['playlists/'+pl.Id]);
  }

  onSelectPlaylist(id: number){
    this.selectedPlaylist = id;
  }

  onSavePlaylist(pl: Playlist){
    pl.Name = this.nameInput;
    this.plService.changePlaylist(pl);
    this.selectedPlaylist = null;
    this.openSnackBar("Guardado", "Cerrar");
  }

  onDelete(id: number) {
    this.plService.removePlaylist(id);
    this.openSnackBar("Eliminado", "Cerrar");
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
