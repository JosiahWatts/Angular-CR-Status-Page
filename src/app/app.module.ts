import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubHeaderComponent } from './sub-header/sub-header.component';
import { HeaderComponent } from './header/header.component';
import { AppStatusListComponent } from './app-status-list/app-status-list.component';
import { IncidentStatusListComponent } from './incident-status-list/incident-status-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SubHeaderComponent,
    HeaderComponent,
    AppStatusListComponent,
    IncidentStatusListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
