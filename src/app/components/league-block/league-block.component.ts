import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { League } from '../../models/league';
import { LeagueBlock } from './league-block';

@Component({
  selector: 'app-league-block',
  templateUrl: './league-block.component.html',
  styleUrls: ['./league-block.component.css']
})
export class LeagueBlockComponent implements OnInit {

  @Input()
  name:string;

  @Input()
  model:LeagueBlock;


  @Output() clicked: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  selectLeague(){
    this.clicked.emit(this.model.id);
  }

}
