import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Playlist } from 'src/app/models/Playlist';
import { PlaylistService } from 'src/app/services/playlist/playlist.service';
import { Location } from '@angular/common';
import { NavigatorBarService } from 'src/app/services/navigator-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
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
    private plService: PlaylistService,
    private _snackBar: MatSnackBar) {
    //this.navbarService.addRoute("/addPlaylist");
    //console.log("/addPlaylist added");
  }

  ngOnInit(): void {
    this.newPlaylist = new Playlist(-1, "", "", 0);
  }

  onCreate(): void {
    this.newPlaylist.Name = this.nameInput;
    this.plService.addPlaylist(this.newPlaylist);
    this.openSnackBar("Lista creada: " + this.newPlaylist.Name, "Cerrar"); //snackbar
    this.navbarService.removeRoute();
  }

  onCancel(): void {
    this.navbarService.refreshRoute();
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
  /* Metodo con componente personalizado
  openSnackBar() {
    this._snackBar.openFromComponent(NotFoundComponent, {
      duration: 3 * 1000,
    });
  }*/
}
