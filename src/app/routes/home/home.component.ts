import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from '../../services/data.service';
import { League } from '../../models/league';

import { LeagueBlock } from '../../components/league-block/league-block';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  leagueBlocks: LeagueBlock[];
  tourneyBlocks: LeagueBlock[];

  constructor(private dataService: DataService,
              private router: Router) { }

  ngOnInit() {

    this.leagueBlocks = [
      new LeagueBlock(426, 'English Premier League'),
      new LeagueBlock(436, 'La Liga'),
      new LeagueBlock(438, 'Serie A'),
      new LeagueBlock(434, 'Ligue 1'),
      new LeagueBlock(430, 'Bundesliga')
    ];

    this.tourneyBlocks = [
      new LeagueBlock(426, 'UEFA Champions League'),
      new LeagueBlock(436, 'European Championship'),
      new LeagueBlock(434, 'FA Cup')
    ]
  }

  onClicked(event){
    this.router.navigate([`league/${event}`, ]);
  }
}
