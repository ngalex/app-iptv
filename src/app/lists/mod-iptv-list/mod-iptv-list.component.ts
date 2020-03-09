import { Component, OnInit, Output, EventEmitter, Input, SimpleChanges } from '@angular/core';
import { Playlist } from '../../models/Playlist';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PlaylistService } from 'src/app/services/playlist/playlist.service';

@Component({
  selector: 'app-mod-iptv-list',
  templateUrl: './mod-iptv-list.component.html',
  styleUrls: ['./mod-iptv-list.component.css']
})
export class ModIptvListComponent implements OnInit {
  @Output() enableChannelEditor = new EventEmitter<boolean>();
  @Output() enablePlaylistEditor = new EventEmitter<boolean>();
  public selectedPlaylist: number;
  public nameInput: string;
  public enableEdit: boolean; 
  public playlists: Playlist[];

  constructor(private plService: PlaylistService,
              private router: Router) {
    this.playlists = this.plService.playlistSource;    
  }

  onEditPlaylist(pl: Playlist):void {
    this.onSelectPlaylist(pl.Id);
    this.nameInput = pl.Name;
    this.enableEdit = true;
  }
  onEditChannel(pl: Playlist):void{
    this.plService.sendPlaylist.emit(pl);
    this.enablePlaylistEditor.emit(false);
    this.enableChannelEditor.emit(true);
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

  ngOnInit(): void { 
  }

}
