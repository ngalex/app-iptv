import { Component, OnInit, Output, EventEmitter, Input, SimpleChanges } from '@angular/core';
import { Playlist } from '../../models/Playlist';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PlaylistService } from 'src/app/services/playlist/playlist.service';
import { NavigatorBarService } from 'src/app/services/navigator-service.service';

@Component({
  selector: 'app-mod-iptv-list',
  templateUrl: './mod-iptv-list.component.html',
  styleUrls: ['./mod-iptv-list.component.css']
})
export class ModIptvListComponent implements OnInit {
  //@Output() enableChannelEditor = new EventEmitter<boolean>();
  //@Output() enablePlaylistEditor = new EventEmitter<boolean>();
  public selectedPlaylist: number;
  public nameInput: string;
  public enableEdit: boolean; 
  public playlists: Playlist[];

  constructor(private plService: PlaylistService,
              private router: Router,
              private navbarService: NavigatorBarService) {
    this.playlists = this.plService.playlistSource;    
  }

  onEditPlaylist(pl: Playlist):void {
    this.onSelectPlaylist(pl.Id);
    this.nameInput = pl.Name;
    this.enableEdit = true;
  }
  onEditChannel(pl: Playlist):void{
    this.plService.selectedPlaylist.emit(pl.Id);
    //this.enablePlaylistEditor.emit(false);
    //this.enableChannelEditor.emit(true);
    //this.navbarService.addRoute("/"+pl.Id);
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
    this.navbarService.addRoute("/playlists");
  }

}
