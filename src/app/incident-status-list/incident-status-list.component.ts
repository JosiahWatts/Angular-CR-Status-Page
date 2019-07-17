import { Component, OnInit } from '@angular/core';
import { IncidentService } from '../shared/services/incident.service';

@Component({
  selector: 'app-incident-status-list',
  templateUrl: './incident-status-list.component.html',
  styleUrls: ['./incident-status-list.component.scss']
})
export class IncidentStatusListComponent implements OnInit {

  // uncomment this and change the html from incidentList to testIncidentList 
  // to test the incidents since there are not active incidents on Happy Apps currently.
  // Still need to create a pipe for the date on the real object
  // private testIncidentList: Object[] = [
  //   {
  //     name: 'Testing Two Three Four',
  //     comment: 'Just a little test object that I created to hold this so I do not have to create a new thing',
  //   }
  // ];

  private incidentList: Object[];
  
  constructor(private _incidentService: IncidentService) { }

  ngOnInit() {
    this.getIncidents();
  }

  getIncidents() {
    let incidents: Object[];
    this._incidentService.getIncidentList()
      .subscribe(incidents => {
        incidents = incidents.openIncidents;
        incidents = incidents.filter((incident:any) => incident.severity === 'info');
        this.incidentList = incidents;
      });
  }

}
