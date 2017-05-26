import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Player } from '../../models/player';

@Component({
  selector: 'app-roster-table',
  templateUrl: './roster-table.component.html'
})
export class RosterTableComponent implements OnInit {

  @Input()
  players:Player[];

  groups = {};

  groupNames:string[];

  constructor() { }

  ngOnChanges(){
    if(this.players){
      this.organizePlayers();
    }
  }

  ngOnInit() {
  }

  private organizePlayers(): void{
    this.groups = {
      'Goalkeepers': [],
      'Defenders': [],
      'Midfielders': [],
      'Attackers': []
    };

    this.groupNames = Object.keys(this.groups);

    for(let player of this.players){
      if(player.position.includes('Keeper')){
        this.groups['Goalkeepers'].push(player);
      }else if(player.position.includes('Back')){
        this.groups['Defenders'].push(player);
      }else if(player.position.includes('Midfield') || player.position.includes('Wing')){
        this.groups['Midfielders'].push(player);
      }else{
        this.groups['Attackers'].push(player)
      }
    }
  }

}
