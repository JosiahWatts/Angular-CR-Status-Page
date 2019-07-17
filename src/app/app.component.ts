import { Component, OnInit } from '@angular/core';
import * as WebFont from 'webfontloader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  // Could probably convert these into models, maybe?
  statusHeaderText = {
    title: `CallRevu's Status Page`,
    description: `Current Status for Websites & API`,
    subtitle: `Check here for updates about CallRevu’s service availability and the status of software.`,
  };

  incidentHeaderText = {
    title: `Upcoming Maintenance`,
    description: `Current Information on Our Upcoming Maintenance`,
    subtitle: `Check here for updates so you’ll know ahead of time about potential service disruptions.`
  };

  ngOnInit(){
    WebFont.load({
      google: {
        families: ['Roboto: 400, 400i, 700']
      }
    });
  }

}
