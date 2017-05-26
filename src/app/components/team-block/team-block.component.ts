import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Team } from '../../models/team';
import { TeamBlock } from './team-block.model';

@Component({
  selector: 'app-team-block',
  templateUrl: './team-block.component.html',
  styleUrls: ['./team-block.component.scss']
})
export class TeamBlockComponent implements OnInit {

  @Input()
  team: Team;

  @Input()
  model: TeamBlock;

  @Output()
  clicked: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
    
  }

  blockClicked(){
    this.clicked.emit(this.model.team.id);
  }

}
