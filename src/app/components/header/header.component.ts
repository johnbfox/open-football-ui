import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  host: {
    class: 'header'
  }
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
