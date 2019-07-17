import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import AppHealth from '../models/AppHealth';

@Injectable({
  providedIn: 'root'
})
export class AppStatusService {
  
  private _token = "BEARER 13bed2b6-5652-41c1-93b1-bdcd69048532";
  private _appUrl = "https://api.happyapps.io/api/dashboard";

  private httpOptions = {
    headers: new HttpHeaders({
      Authorization: this._token
    })
  };

  constructor(private http: HttpClient) { }

  getAppList(): Observable<any>{
    return this.http.get(this._appUrl, this.httpOptions);
  }

  calculateAppGroupHealthStatus(appList): AppHealth {
    let warningApps = 0;
    let criticalApps = 0;
    let appGroupHealth: AppHealth = { health: 0, tagline: '' };

    for(let app of appList){
      if(app.health !== 0 && app.health < 10)
        warningApps++;
      if(app.health === 0)
        criticalApps++;
    }
    
    if(warningApps > 0 && criticalApps < 1) {
      appGroupHealth.health = 1;
      appGroupHealth.tagline = 'Houston, We Have a Problem';
    }
    if(criticalApps > 0) {
      appGroupHealth.health = 0;
      appGroupHealth.tagline = 'Emergency Situation';
    }
    if(warningApps < 1 && criticalApps < 1) {
      appGroupHealth.health = 10;
      appGroupHealth.tagline = 'All Systems Operational';
    }
    
    return appGroupHealth;
  }
}
