import { Component, OnInit, Input, SimpleChanges, SimpleChange } from '@angular/core';
import { Channel } from '../../models/Channel';
import { ChannelService } from 'src/app/services/channel/channel.service';
import { PlaylistService } from 'src/app/services/playlist/playlist.service';
import { Playlist } from 'src/app/models/Playlist';
import { ActivatedRoute } from '@angular/router';
import { NavigatorBarService } from 'src/app/services/navigator-service.service';

@Component({
  selector: 'app-channel-editor',
  templateUrl: './channel-editor.component.html',
  styleUrls: ['./channel-editor.component.css']
})
export class ChannelEditorComponent implements OnInit {
  public selectedPlaylist: Playlist;
  public channels: Channel[];
  public selectedChannel: number = null;
  public enableEdit: boolean = false;
  public index: number;

  constructor(private plService: PlaylistService,
    private chnService: ChannelService,
    private route: ActivatedRoute,
    private navbarService: NavigatorBarService) {
    this.route.paramMap.subscribe(
      (params) => {
        this.index = +params.get('id');
        this.plService.selectedPlaylist = this.index;
        this.navbarService.addRoute("/" + this.index);
        console.log("/id added");
        //this.index = this.route.snapshot.params['id'];
      }
    );
    this.chnService.loadChannels(this.plService.selectedPlaylist);
    this.channels = this.chnService.channels;
  }

  ngOnInit(): void {
  }

  onAdd(channel: Channel): void {
    this.chnService.addChannel(channel);
    this.chnService.loadChannels(this.plService.selectedPlaylist);
  }
  /*
    loadChannels() {
      this.channels = [];
      if (this.index != null)
        this.chnService.channelsSource.forEach(channel => {
          if (channel.IdPlaylist == this.index) this.channels.push(channel);
        });
    }
  */
  onEnableEdition(i: number): void {
    this.selectedChannel = i;
    this.enableEdit = true;
  }

  onChangeUrl(chn: Channel, urlInput: HTMLInputElement): void {
    chn.Url = urlInput.value;
    this.chnService.changeChannel(chn);
    this.selectedChannel = null;
    this.enableEdit = false;
    this.chnService.loadChannels(this.plService.selectedPlaylist);
  }

  onRemove(id: number) {
    this.chnService.removeChannel(id);
    this.chnService.loadChannels(this.plService.selectedPlaylist);
  }

  onOpenUrl(i: number) {
    window.location.href = this.channels[i].Url;
  }

}
