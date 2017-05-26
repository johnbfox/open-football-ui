import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { DataService } from '../../../services/data.service';
import { Team } from '../../../models/team';
import { Player } from '../../../models/player';

import { TeamBlock } from '../../../components/team-block/team-block.model';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {

  teams: Team[];
  teamBlocks: TeamBlock[] = [];
  selectedTeam: Team;
  selectedPlayers: Player[];
  selectedTeamId: number;

  arePlayersShowing: boolean = true;
  areChartsShowing: boolean = false;

  constructor(private route: ActivatedRoute, private dataService: DataService ) { }

  ngOnInit() {
    this.route.parent.params.subscribe(params => {
      let id:number = params['id'];

      this.dataService
        .getTeams(id)
        .then(teams =>  {
          this.teams = teams.sort((obj1, obj2) => {
            if(obj1.name < obj2.name) return -1;
            else if(obj1.name > obj2.name) return 1;
            else return 0;
          });

          for(let team of teams){
            const block: TeamBlock = new TeamBlock();
            block.team = team;
            block.active = false;

            this.teamBlocks.push(block);
          }
        });
      });
  }

  teamSelected(id: any){
    //TODO: Bind team id from selected object
    this.selectedTeamId = id;
    this.dataService
      .getTeam(this.selectedTeamId)
      .then(team => this.selectedTeam = team);

    this.dataService
      .getPlayers(this.selectedTeamId)
      .then( players => this.selectedPlayers = players );

    for(let team of this.teamBlocks){
      if(team.team.id === id){
        team.active=true;
      }else{
        team.active=false;
      }
    }
  }

  showPlayers(){
    this.arePlayersShowing = true;
    this.areChartsShowing = false;
  }

  showCharts(){
    this.arePlayersShowing = false;
    this.areChartsShowing = true;
  }

}
