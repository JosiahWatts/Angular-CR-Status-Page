import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IncidentService {
  
  private _token = "BEARER 13bed2b6-5652-41c1-93b1-bdcd69048532";
  private _appUrl = "https://api.happyapps.io/api/dashboard";

  private httpOptions = {
    headers: new HttpHeaders({
      Authorization: this._token
    })
  };

  constructor(private http: HttpClient) { }

  getIncidentList(): Observable<any>{
    return this.http.get(this._appUrl, this.httpOptions);
  }
}
