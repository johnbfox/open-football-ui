import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LeagueBlockComponent } from './components/league-block/league-block.component';
import { HomeComponent } from './routes/home/home.component';

import { DataService } from './services/data.service';
import { LeagueComponent } from './routes/league/league.component';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavTabsComponent } from './components/nav-tabs/nav-tabs.component';
import { TableComponent } from './routes/league/table/table.component';
import { TeamsComponent } from './routes/league/teams/teams.component';
import { TeamBlockComponent } from './components/team-block/team-block.component';
import { RosterTableComponent } from './components/roster-table/roster-table.component';
import { LoadingLayerComponent } from './components/loading-layer/loading-layer.component';
import { TeamChartsComponent } from './components/team-charts/team-charts.component';

@NgModule({
  declarations: [
    AppComponent,
    LeagueBlockComponent,
    HomeComponent,
    LeagueComponent,
    FooterComponent,
    HeaderComponent,
    NavTabsComponent,
    TableComponent,
    TeamsComponent,
    TeamBlockComponent,
    RosterTableComponent,
    LoadingLayerComponent,
    TeamChartsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ DataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
