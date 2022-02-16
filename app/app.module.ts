import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PlannedLaunchComponent } from './planned-launch/planned-launch.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlannedLaunchComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'planned-launch', component: PlannedLaunchComponent, pathMatch: 'full' },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
