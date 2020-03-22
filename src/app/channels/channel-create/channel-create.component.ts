import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ChannelService } from 'src/app/services/channel/channel.service';
import { PlaylistService } from 'src/app/services/playlist/playlist.service';
import { Playlist } from 'src/app/models/Playlist';
import { Channel } from 'src/app/models/Channel';
import { NavigatorBarService } from 'src/app/services/navigator-service.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-channel-create',
  templateUrl: './channel-create.component.html',
  styleUrls: ['./channel-create.component.css']
})
export class ChannelCreateComponent implements OnInit {
public newChannel: Channel = new Channel(-1,-1,"");
public urlInput: string;
  constructor(private _location: Location,
              private navbarService: NavigatorBarService,
              private plService: PlaylistService,
              private chnService: ChannelService) {
              this.navbarService.addRoute("/add");
              console.log("/add added");
  }

  ngOnInit(): void {
  }

  onCreate():void{
    this.newChannel.IdPlaylist = this.plService.selectedPlaylist;
    this.newChannel.Url = this.urlInput;
    this.chnService.addChannel(this.newChannel);
    this.navbarService.removeRoute();
    this._location.back();
  }

  onCancel():void {
    this.navbarService.removeRoute();
    this._location.back();
  }

}
