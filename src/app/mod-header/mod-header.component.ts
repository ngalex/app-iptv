import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mod-header',
  templateUrl: './mod-header.component.html',
  styleUrls: ['./mod-header.component.css']
})
export class ModHeaderComponent implements OnInit {
  @Output() isDarkTheme: EventEmitter<boolean> = new EventEmitter<boolean>();
  toggled: boolean = false;

  constructor() {
    console.log("app-header constructor");
  }

  ngOnInit(): void {
    console.log("app-header oninit");
  }

  public onSetTheme() {
    if (!this.toggled) {
      this.isDarkTheme.emit(true);
      this.toggled = true;
    } else {
      this.isDarkTheme.emit(false);
      this.toggled = false;
    }
  }

}
