import {Component} from '@angular/core';
import {MdDialogRef} from '@angular/material';

export class Ques {
  constructor(public name: string, public ques: string) {}
}

@Component({
  selector: 'app-input-dialog',
  templateUrl: './app-input-dialog.component.html',
  styleUrls: ['./app-input-dialog.component.css']
})
export class AppInputDialogComponent {
  ques: Ques = {
    name: null,
    ques: null
  };
  constructor(public dialogRef: MdDialogRef<AppInputDialogComponent>) {}
}
