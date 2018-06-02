import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreScheduleDownloadComponent } from './pre-schedule-download.component';

describe('PreScheduleDownloadComponent', () => {
  let component: PreScheduleDownloadComponent;
  let fixture: ComponentFixture<PreScheduleDownloadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreScheduleDownloadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreScheduleDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
