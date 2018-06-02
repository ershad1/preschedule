import {Component, OnInit} from '@angular/core';
import {filter} from 'rxjs/operators';
import {MatDialog} from '@angular/material';
import {MasSettingDialogComponent} from './dialog/mas-setting-dialog/mas-setting-dialog.component';

@Component({
  selector: 'app-pre-schedule-download',
  templateUrl: './pre-schedule-download.component.html',
  styleUrls: ['./pre-schedule-download.component.css']
})
export class PreScheduleDownloadComponent implements OnInit {

  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {
  }

  openMasSettingDialog(): void {
    const dialogRef = this.dialog.open(MasSettingDialogComponent, {
      disableClose: true,
      data: {

      }

    });
    dialogRef.updatePosition({top: '50px'});
    dialogRef.afterClosed()
      .pipe(filter(row => row))
      .subscribe(row => {
          this.saveMasSetting(row);
      });
  }

  saveMasSetting(row){}
}
