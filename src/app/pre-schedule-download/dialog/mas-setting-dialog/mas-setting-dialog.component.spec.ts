import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasSettingDialogComponent } from './mas-setting-dialog.component';

describe('MasSettingDialogComponent', () => {
  let component: MasSettingDialogComponent;
  let fixture: ComponentFixture<MasSettingDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasSettingDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasSettingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
