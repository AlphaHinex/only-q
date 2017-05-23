import {Component, Inject} from '@angular/core';
import {MD_DIALOG_DATA} from '@angular/material';
import * as AV from 'leancloud-storage';

@Component({
  selector: 'app-view-dialog',
  templateUrl: './app-view-dialog.component.html',
  styleUrls: ['./app-view-dialog.component.css']
})
export class AppViewDialogComponent {
  constructor(@Inject(MD_DIALOG_DATA) public data: AV.Object) {}
}
