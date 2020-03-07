import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Playlist } from 'src/app/models/Playlist';
import { PlaylistService } from 'src/app/services/playlist/playlist.service';

@Component({
  selector: 'app-list-create',
  templateUrl: './list-create.component.html',
  styleUrls: ['./list-create.component.css']
})
export class ListCreateComponent implements OnInit {
  @Output() disablePlaylistCreator = new EventEmitter<boolean>();
  public newPlaylist: Playlist;
  public nameInput: string;
  constructor(private plService: PlaylistService) { }

  ngOnInit(): void {
    this.newPlaylist = new Playlist(-1, "","",0);
  }

  onCreate(): void {
    this.newPlaylist.Name = this.nameInput;
    this.plService.addPlaylist(this.newPlaylist);
    this.disablePlaylistCreator.emit(false);
  }

  onCancel(): void {
    this.disablePlaylistCreator.emit(false);
  }

}
