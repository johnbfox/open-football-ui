import { Injectable } from '@angular/core';
import { League } from '../models/league';
import { Team } from '../models/team';
import { TableRow } from '../models/table-row';
import { Table } from '../models/table';
import { Player } from '../models/player';

import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DataService {

  leaguesUrl:string = 'http://api.football-data.org/v1';

  constructor(private http: Http) { }

  getLeagues(): Promise<League[]> {
    return this.http.get(`${this.leaguesUrl}/competitions`, { headers: this.getHeaders() })
               .toPromise()
               .then(response => response.json() as League[])
               .catch(this.handleError);
  }

  getLeague(teamId: number): Promise<League>{
    return this.http.get(`${this.leaguesUrl}/competitions/${teamId}`, { headers: this.getHeaders() })
               .toPromise()
               .then(response => response.json() as League)
               .catch(this.handleError);
  }

  getTeams(leagueId: number): Promise<Team[]> {
    return this.http.get(`${this.leaguesUrl}/competitions/${leagueId}/teams`, { headers: this.getHeaders() })
               .toPromise()
               .then((response) => {
                 return this.extractTeams(response.json().teams)
               })
               .catch(this.handleError);
  }

  getTeam(teamId: number): Promise<Team> {
    return this.http.get(`${this.leaguesUrl}/teams/${teamId}`, { headers: this.getHeaders() })
               .toPromise()
               .then(response => response.json() as Team)
               .catch(this.handleError);
  }

  private extractTeams(teams: any): Team[]{
    const newTeams: Team[] = [];
    for(let team of teams){
      const t: Team = new Team();
      t.name = team.name;
      t.shortName = team.shortName;
      t.squadMarketValue = team.squadMarketValue;
      t.crestUrl = team.crestUrl;
      t.id = team._links.self.href.match(
        new RegExp('[^/]+(?=/$|$)'))[0];

      newTeams.push(t);
    }
    return newTeams;
  }

  getTable(leagueId: number): Promise<Table> {
    return this.http.get(`${this.leaguesUrl}/competitions/${leagueId}/leagueTable`, { headers: this.getHeaders() })
               .toPromise()
               .then(response => response.json() as Table)
               .catch(this.handleError);
  }

  getPlayers(teamId: number): Promise<Player[]> {
    return this.http.get(`${this.leaguesUrl}/teams/${teamId}/players`, { headers: this.getHeaders() })
               .toPromise()
               .then(response => response.json().players as Player[])
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
     console.error('An error occurred', error); // for demo purposes only
     return Promise.reject(error.message || error);
   }

   private getHeaders(): Headers{
     let headers = new Headers();
     headers.append('X-Auth-Token', '58bc082542554a4a9f1d8f2fdf8bb48d');
     headers.append('X-Response-Control', 'full');
     return headers;
   }

}
