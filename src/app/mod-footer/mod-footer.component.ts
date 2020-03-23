import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mod-footer',
  templateUrl: './mod-footer.component.html',
  styleUrls: ['./mod-footer.component.css']
})
export class ModFooterComponent implements OnInit {

  constructor() {console.log("app-footer constructor"); }

  ngOnInit(): void {console.log("app-footer oninit");
  }

}
