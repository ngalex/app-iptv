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
  public playlists: Playlist[];

  constructor(private plService: PlaylistService) {
    this.playlists = this.plService.playlistSource;    
  }

  onEditPlaylist(pl: Playlist):void {
    this.enablePlaylistEditor.emit(true);
    this.plService.sendPlaylist.emit(pl);
    this.enableChannelEditor.emit(false);
  }
  onEditChannel(pl: Playlist):void{
    this.plService.sendPlaylist.emit(pl);
    this.enablePlaylistEditor.emit(false);
    this.enableChannelEditor.emit(true);
  }

  ngOnInit(): void { 
  }

}
