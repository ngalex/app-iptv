import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mod-header',
  templateUrl: './mod-header.component.html',
  styleUrls: ['./mod-header.component.css']
})
export class ModHeaderComponent implements OnInit {

  constructor() { 
    console.log("app-header constructor");
  }

  ngOnInit(): void {console.log("app-header oninit");
  }

}
