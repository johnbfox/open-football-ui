import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './routes/home/home.component';
import { LeagueComponent } from './routes/league/league.component';
import { TableComponent } from './routes/league/table/table.component';
import { TeamsComponent } from './routes/league/teams/teams.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'league/:id',
    component: LeagueComponent,
    children:[{
      path: '',
      component: TableComponent
    },{
      path: 'teams',
      component: TeamsComponent
    }
  ]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
