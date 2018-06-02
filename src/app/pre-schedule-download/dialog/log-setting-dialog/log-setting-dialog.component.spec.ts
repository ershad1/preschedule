import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogSettingDialogComponent } from './log-setting-dialog.component';

describe('LogSettingDialogComponent', () => {
  let component: LogSettingDialogComponent;
  let fixture: ComponentFixture<LogSettingDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogSettingDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogSettingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
