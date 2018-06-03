import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PreScheduleDownloadComponent } from './pre-schedule-download/pre-schedule-download.component';
import {MaterialModule} from './shared-module/material.module';
import { MasSettingDialogComponent } from './pre-schedule-download/dialog/mas-setting-dialog/mas-setting-dialog.component';
import { LogSettingDialogComponent } from './pre-schedule-download/dialog/log-setting-dialog/log-setting-dialog.component';
import { SentrySettingDialogComponent } from './pre-schedule-download/dialog/sentry-setting-dialog/sentry-setting-dialog.component';
import {FormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    PreScheduleDownloadComponent,
    MasSettingDialogComponent,
    LogSettingDialogComponent,
    SentrySettingDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[
    MasSettingDialogComponent,
    LogSettingDialogComponent,
    SentrySettingDialogComponent
  ]
})
export class AppModule { }
