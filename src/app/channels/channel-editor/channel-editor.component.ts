import { Component, OnInit, Input, SimpleChanges, SimpleChange } from '@angular/core';
import { Channel } from '../../models/Channel';
import { ChannelService } from 'src/app/services/channel/channel.service';
import { PlaylistService } from 'src/app/services/playlist/playlist.service';
import { Playlist } from 'src/app/models/Playlist';
import { ActivatedRoute, Router } from '@angular/router';

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
    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.channels = [];
    this.index = this.route.snapshot.params['id'];
    this.loadChannels();
  }

  isEnabledCreating(): boolean{
    if(this.router.routerState.snapshot.url == "/edit") return true; else return false;
  }

  onAdd(channel: Channel): void {
    this.chnService.addChannel(channel);
  }

  loadChannels() {
    this.channels = [];
    if (this.index != null)
      this.chnService.channelsSource.forEach(channel => {
        if (channel.IdPlaylist == this.index) this.channels.push(channel);
      });
  }

  onEnableEdition(i: number): void {
    this.selectedChannel = i;
    this.enableEdit = true;
  }

  onChangeUrl(chn: Channel, urlInput: HTMLInputElement): void {
    chn.Url = urlInput.value;
    this.chnService.changeChannel(chn);
    this.selectedChannel = null;
    this.enableEdit = false;
  }

  onRemove(id: number) {
    this.chnService.removeChannel(id);
  }

  onOpenUrl(i: number) {
    window.location.href = this.channels[i].Url;
  }

}
