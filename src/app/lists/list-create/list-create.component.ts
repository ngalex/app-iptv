import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Playlist } from 'src/app/models/Playlist';
import { PlaylistService } from 'src/app/services/playlist/playlist.service';
import { Location } from '@angular/common';
import { NavigatorBarService } from 'src/app/services/navigator-service.service';

@Component({
  selector: 'app-list-create',
  templateUrl: './list-create.component.html',
  styleUrls: ['./list-create.component.css']
})
export class ListCreateComponent implements OnInit {
  public newPlaylist: Playlist;
  public nameInput: string;
  constructor(private _location: Location,
              private navbarService: NavigatorBarService,
              private plService: PlaylistService) { 
                this.navbarService.addRoute("/add");
                console.log("/add added");
              }

  ngOnInit(): void {
    this.newPlaylist = new Playlist(-1, "","",0);
  }

  onCreate(): void {
    this.newPlaylist.Name = this.nameInput;
    this.plService.addPlaylist(this.newPlaylist);
    this.navbarService.removeRoute();
    this._location.back();
  }

  onCancel(): void {
    this.navbarService.removeRoute();
    this._location.back();
  }

}
