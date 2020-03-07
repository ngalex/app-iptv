import { Injectable, EventEmitter } from '@angular/core';
import { Playlist } from 'src/app/models/Playlist';
import { ChannelService } from '../channel/channel.service';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
  playlistSource: Playlist[];
  sendPlaylist = new EventEmitter<Playlist>();

  constructor(private chnService: ChannelService) {
    this.loadPlaylists();
   }
   
   loadPlaylists(): void {
    this.playlistSource = [
      new Playlist(0, 'Playlist 0', 'https://', this.chnService.countPLChannels(0)),
      new Playlist(1, 'Playlist 1', 'https://', this.chnService.countPLChannels(1)),
      new Playlist(2, 'Playlist 2', 'https://', this.chnService.countPLChannels(2)),
      new Playlist(3, 'Playlist 3', 'https://', this.chnService.countPLChannels(3)),
      new Playlist(4, 'Playlist 4', 'https://', this.chnService.countPLChannels(4)),
      new Playlist(5, 'Playlist 5', 'https://', this.chnService.countPLChannels(5)),
      new Playlist(6, 'Playlist 6', 'https://', this.chnService.countPLChannels(6)),
      new Playlist(7, 'Playlist 7', 'https://', this.chnService.countPLChannels(7)),
      new Playlist(8, 'Playlist 8', 'https://', this.chnService.countPLChannels(8))
    ];
   }

   addPlaylist(pl: Playlist): void{
     let maxId = -1;
     this.playlistSource.forEach(playlist => {
       console.log(playlist.Id)
       if(playlist.Id > maxId) maxId = playlist.Id; 
     });
     pl.Id = maxId + 1;
     this.playlistSource.push(pl);
   }

   findById(id: number): number{
     for(let i = 0; i < this.playlistSource.length; i++){
       if ( this.playlistSource[i].Id == id) return i;
     }
     return -1;
   }

   changePlaylist(pl: Playlist): void {
    let index = this.findById(pl.Id);
    if(index > -1) this.playlistSource[index] = pl;
   }

   removePlaylist(id: number): void {
    if(id > -1) this.playlistSource.splice(id,1);
   }
}
