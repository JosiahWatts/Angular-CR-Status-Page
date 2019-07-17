import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentStatusListComponent } from './incident-status-list.component';

describe('IncidentStatusListComponent', () => {
  let component: IncidentStatusListComponent;
  let fixture: ComponentFixture<IncidentStatusListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentStatusListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentStatusListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
