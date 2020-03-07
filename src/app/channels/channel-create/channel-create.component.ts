import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ChannelService } from 'src/app/services/channel/channel.service';
import { PlaylistService } from 'src/app/services/playlist/playlist.service';
import { Playlist } from 'src/app/models/Playlist';
import { Channel } from 'src/app/models/Channel';

@Component({
  selector: 'app-channel-create',
  templateUrl: './channel-create.component.html',
  styleUrls: ['./channel-create.component.css']
})
export class ChannelCreateComponent implements OnInit {
@Output() disableChannelCreator = new EventEmitter<boolean>();
public newChannel: Channel = new Channel(-1,-1,"");
public urlInput: string;
  constructor(private plService: PlaylistService, private chnService: ChannelService) {
    this.plService.sendPlaylist.subscribe((pl: Playlist) => {
     this.newChannel.IdPlaylist = pl.Id;
    });
  }

  ngOnInit(): void {
  }

  onCreate():void{
    this.newChannel.Url = this.urlInput;
    this.disableChannelCreator.emit(false);
    this.chnService.addChannel(this.newChannel);
  }

  onCancel():void {
    this.disableChannelCreator.emit(false);
  }

}
