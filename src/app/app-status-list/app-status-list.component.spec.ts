import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppStatusListComponent } from './app-status-list.component';

describe('AppStatusListComponent', () => {
  let component: AppStatusListComponent;
  let fixture: ComponentFixture<AppStatusListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppStatusListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppStatusListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
