import { Injectable } from '@angular/core';
import { Channel } from 'src/app/models/Channel';
import { PlaylistService } from '../playlist/playlist.service';

@Injectable({
  providedIn: 'root'
})
export class ChannelService {
  channelsSource: Channel[] = [
    new Channel(0, 0, 'http://'),
    new Channel(0, 1, 'http://'),
    new Channel(0, 2, 'http://'),
    new Channel(1, 3, 'http://'),
    new Channel(0, 4, 'http://'),
    new Channel(0, 5, 'http://'),
    new Channel(1, 6, 'http://'),
    new Channel(2, 7, 'http://'),
    new Channel(2, 8, 'http://'),
    new Channel(0, 9, 'http://'),
    new Channel(7, 10, 'http://'),
    new Channel(7, 11, 'http://'),
    new Channel(6, 12, 'http://'),
    new Channel(1, 13, 'http://'),
    new Channel(4, 14, 'http://'),
    new Channel(1, 15, 'http://'),
    new Channel(8, 16, 'http://'),
    new Channel(6, 17, 'http://'),
    new Channel(3, 18, 'http://'),
    new Channel(5, 19, 'http://'),
  ];
  channels: Channel[];

  constructor(private plService: PlaylistService) {
    //this.loadChannels(this.plService.selectedPlaylist);
    //console.log(this.plService.selectedPlaylist)
  }
  

  countPLChannels(idPl: number): number {
    let n = 0;
    this.channelsSource.forEach(chn => {
      if (chn.IdPlaylist == idPl) n++;
    });
    return n;
  }

  loadChannels(idPlaylist: number) {
    this.channels = []
    if (idPlaylist != null)
      this.channelsSource.forEach(channel => {
        if (channel.IdPlaylist == idPlaylist) this.channels.push(channel);
      });
  }

  addChannel(chn: Channel): void {
    let maxId = -1;
    this.channelsSource.forEach(channel => {
      if (channel.Id > maxId) maxId = channel.Id;
    });
    chn.Id = ++maxId;
    console.log(chn);
    if (chn.Id != -1) this.channelsSource.push(chn);
  }

  removeChannel(id: number): void {
    let index = this.findById(id);
    if (index > -1) this.channelsSource.splice(index, 1);
  }

  findById(id: number): number {
    for (let i = 0; i < this.channelsSource.length; i++) {
      if (this.channelsSource[i].Id == id) return i;
    }
    return -1;
  }

  changeChannel(chn: Channel) {
    let index = this.findById(chn.Id);
    if (index > -1) this.channelsSource[index] = chn;
  }
}
