import { Component, OnInit } from '@angular/core';
import { Playlist } from '../../models/Playlist';
import { Router } from '@angular/router';
import { PlaylistService } from 'src/app/services/playlist/playlist.service';

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

  constructor(private plService: PlaylistService,
              private router: Router) {
  }

  ngOnInit(): void {   
    this.playlists = this.plService.playlistSource;
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
  }

  onDelete(id: number) {
    this.plService.removePlaylist(id);
  }

}
