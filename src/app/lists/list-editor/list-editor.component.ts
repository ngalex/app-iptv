import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Playlist } from '../../models/Playlist';
import { PlaylistService } from 'src/app/services/playlist/playlist.service';

@Component({
  selector: 'app-list-editor',
  templateUrl: './list-editor.component.html',
  styleUrls: ['./list-editor.component.css']
})
export class ListEditorComponent implements OnInit {
  @Output() disablePlaylistEditor = new EventEmitter<boolean>();
  public changedPlaylist: Playlist = new Playlist(-1,"test","test",0);
  
  constructor() {}

  ngOnInit(): void {
  }

  setPlaylist(): void {
    this.disablePlaylistEditor.emit(false);
  }

  onCancel(){
    this.disablePlaylistEditor.emit(false);
  }

}
