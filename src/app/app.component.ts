import { Component } from '@angular/core';
import { Playlist } from './models/Playlist';

@Component({
  selector: 'home',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Home';
  public enableEditChannel: boolean = false;
  public enableCreateChannel: boolean = false;
  public enableEditPlaylist: boolean = false;
  public enableCreatePlaylist: boolean = false;
}
