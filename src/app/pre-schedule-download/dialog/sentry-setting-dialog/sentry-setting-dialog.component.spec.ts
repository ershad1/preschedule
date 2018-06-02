import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SentrySettingDialogComponent } from './sentry-setting-dialog.component';

describe('SentrySettingDialogComponent', () => {
  let component: SentrySettingDialogComponent;
  let fixture: ComponentFixture<SentrySettingDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SentrySettingDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SentrySettingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
