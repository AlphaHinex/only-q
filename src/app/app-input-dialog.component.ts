import {Component} from '@angular/core';
import {MdDialogRef} from '@angular/material';

export class Ques {
  constructor(public name: string, public ques: string, public up: number, public down: number) {}
}

@Component({
  selector: 'app-input-dialog',
  templateUrl: './app-input-dialog.component.html',
  styleUrls: ['./app-input-dialog.component.css']
})
export class AppInputDialogComponent {
  ques: Ques = new Ques(null, null, 0, 0);
  constructor(public dialogRef: MdDialogRef<AppInputDialogComponent>) {}
}
