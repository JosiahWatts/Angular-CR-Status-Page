import { Component, OnInit, AfterContentInit } from '@angular/core';
import { AppStatusService } from '../shared/services/app-status.service';
import { interval, Observable } from 'rxjs';

import AppHealth from '../shared/models/AppHealth';

@Component({
  selector: 'app-status-list',
  templateUrl: './app-status-list.component.html',
  styleUrls: ['./app-status-list.component.scss']
})
export class AppStatusListComponent implements OnInit {

  websiteAppList: Object[];
  apiAppList: Object[];

  websiteOverallHealth: AppHealth;
  apiOverallHealth: AppHealth;

  constructor(private _appStatusService: AppStatusService) { }

  ngOnInit() {
    // Initial fetching of the data
    this.getWebsiteApps();
    this.getApiApps();
    
    // Set up a interval to auto-fetch data every 30s
    interval(30000).subscribe(x => {
      this.getWebsiteApps();
      this.getApiApps();
      console.log('Checked');
    });    
  }

  getWebsiteApps() {
    let websiteApps: Object[];
    this._appStatusService.getAppList()
      .subscribe(apps => {
        websiteApps = apps.appList;
        websiteApps = websiteApps.filter((app:any) => app.description === 'web');
        this.websiteAppList = websiteApps;
        this.websiteOverallHealth = this._appStatusService.calculateAppGroupHealthStatus(websiteApps);
      });
  } 

  getApiApps() {
    let apiApps: Object[];
    this._appStatusService.getAppList()
      .subscribe(apps => {
        apiApps = apps.appList;
        apiApps = apiApps.filter((app:any) => app.description === 'api');
        this.apiAppList = apiApps;
        this.apiOverallHealth = this._appStatusService.calculateAppGroupHealthStatus(apiApps);
      });
  }

  getAppHealthColor(appHealth): string {
    if(appHealth === 10)
      return '#87C03F';
    if(appHealth === 0)
      return '#E04A1D';
    else
      return '#EEA01D';
  }

}
