import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { TeamsComponent } from './teams/teams.component';
import { TeamMembersComponent } from './team-members/team-members.component';
import { AppWidgetTopNavComponent } from './app-widget-top-nav/app-widget-top-nav.component';


@NgModule({
  declarations: [
    AppComponent,
    TeamsComponent,
    TeamMembersComponent,
    AppWidgetTopNavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
