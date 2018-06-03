import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sentry-setting-dialog',
  templateUrl: './sentry-setting-dialog.component.html',
  styleUrls: ['./sentry-setting-dialog.component.css']
})
export class SentrySettingDialogComponent implements OnInit {
  value = '';

  constructor() { }

  ngOnInit() {
  }

}
