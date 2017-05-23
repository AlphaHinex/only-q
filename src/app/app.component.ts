import {Component, OnInit} from '@angular/core';
import {MdDialog, MdSnackBar} from '@angular/material';
import {AppInputDialogComponent, Ques} from './app-input-dialog.component';
import * as AV from 'leancloud-storage';
import {AppViewDialogComponent} from './app-view-dialog.component';

export const QuesObject = AV.Object.extend('Ques');

@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  questions: AV.Object[] = [];

  constructor(public dialog: MdDialog, public snackBar: MdSnackBar) { }

  getQues(): void {
    const query = new AV.Query('Ques');
    query.addDescending('score');
    query.addDescending('createdAt');
    query.include('name');
    query.include('ques');
    query.find<AV.Object[]>().then(objs => this.questions = objs);
  }

  ngOnInit(): void {
    this.getQues();
  }

  openDialog() {
    const dialogRef = this.dialog.open(AppInputDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result && result.name && result.ques) {
        const snackBar = this.snackBar;
        // const QuesObject = AV.Object.extend('Ques');
        const quesObject = new QuesObject();
        quesObject.save(result).then(function () {
          snackBar.open('Dear ' + result.name + ', thanks for your feedback!', '', {
            duration: 2000
          });
          this.getQues();
        });
      }
    });
  }

  openViewDialog(ques: Ques) {
    this.dialog.open(AppViewDialogComponent, {
      data: ques
    });
  }
}
