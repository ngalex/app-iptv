import { Component, OnInit } from '@angular/core';
import { Channel } from '../../models/Channel';
import { ChannelService } from 'src/app/services/channel/channel.service';
import { PlaylistService } from 'src/app/services/playlist/playlist.service';
import { Playlist } from 'src/app/models/Playlist';
import { ActivatedRoute } from '@angular/router';
import { NavigatorBarService } from 'src/app/services/navigator-service.service';
import { Observable } from 'rxjs/internal/Observable';
import { MatSnackBar } from '@angular/material/snack-bar';

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
  public chn$: Observable<Channel[]>;

  constructor(private plService: PlaylistService,
    private chnService: ChannelService,
    private route: ActivatedRoute,
    private navbarService: NavigatorBarService,
    private _snackBar: MatSnackBar) {
      console.log("app-channeleditor constructor");
    this.navbarService.isActiveChannelEditor = true;
    this.route.paramMap.subscribe(
      (params) => {
        this.index = +params.get('id');
        this.plService.selectedPlaylist = this.index;
        this.channels = this.chnService.getChannels(this.index);
        this.navbarService.addRoute("/" + this.index);
        //this.navbarService.addRoute("id");
        console.log("/id added: " + this.index);
        console.log(this.navbarService.routesStack.length);
        //this.index = this.route.snapshot.params['id'];
      }
    );
  }

  ngOnInit(): void { console.log("app-channeleditor oninit");
    this.chn$ = this.chnService.getChannels$();
    this.chn$.subscribe( () => this.channels = this.chnService.getChannels(this.index));
  }

  ngOnDestroy(): void {
    this.navbarService.isActiveChannelEditor = false;
  }

  onAdd(channel: Channel): void {
    this.chnService.addChannel(channel);
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
    this.openSnackBar("URL cambiada correctamente", "Cerrar");
  }

  onRemove(id: number) {
    this.chnService.removeChannel(id);
    this.openSnackBar("Eliminado", "Cerrar");
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  onOpenUrl(i: number) {
    window.location.href = this.channels[i].Url;
  }

}
