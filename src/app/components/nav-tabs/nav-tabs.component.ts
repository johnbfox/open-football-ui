import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NavTab } from './nav-tab';

@Component({
  selector: 'app-nav-tabs',
  templateUrl: './nav-tabs.component.html'
})
export class NavTabsComponent implements OnInit {

  @Input()
  tabs: NavTab[];

  @Output()
  tabClicked: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  click(clickedTab: NavTab){
    this.tabClicked.emit(clickedTab.id);
  }

}
