import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { DataService } from '../../services/data.service';
import { Team } from '../../models/team';
import { League } from '../../models/league';
import { Table } from '../../models/table';

import { NavTab } from '../../components/nav-tabs/nav-tab';

@Component({
  selector: 'app-league',
  host:{
    class:'content-container'
  },
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.css']
})
export class LeagueComponent implements OnInit {

  table: Table = new Table();
  league: League = new League();
  tabs: NavTab[] = [{
    id: 0,
    name: 'Table',
    active: true,
    url: './'
  },{
    id: 1,
    name: 'Teams',
    active: false,
    url: './teams'
  },{
    id: 2,
    name: 'Fixtures',
    active: false,
    url: './fixtures'
  }];

  constructor(private dataService: DataService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    
    this.route.params.subscribe(params => {
      let id:number = params['id'];

      this.dataService
        .getTable(id)
        .then((table) => {
          this.table = table;
        });

      this.dataService
        .getLeague(id)
        .then(league => this.league = league);
    });
  }

  navigate(event: any) {
    for(let tab of this.tabs){
      if(tab.id === event){
        tab.active = true;
        this.router.navigate([tab.url], {relativeTo: this.route});
      }else{
        tab.active = false;
      }
    }

    console.log(this.tabs);
  }

}
