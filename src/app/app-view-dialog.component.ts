import {Component, Inject} from '@angular/core';
import {MD_DIALOG_DATA} from '@angular/material';
import * as AV from 'leancloud-storage';
import {QuesObject} from 'app/app.component';

@Component({
  selector: 'app-view-dialog',
  templateUrl: './app-view-dialog.component.html',
  styleUrls: ['./app-view-dialog.component.css']
})
export class AppViewDialogComponent {
  constructor(@Inject(MD_DIALOG_DATA) public data: AV.Object) {}

  thumbUp(id: string): void {
    const obj = new QuesObject();
    obj.id = id;
    obj.fetch().then((ques: AV.Object) => {
      ques.increment('score', 1);
      ques.fetchWhenSave(true);
      return ques.save();
    }).then(newData => this.data = newData);
  }

  thumbDown(id: string): void {
    const obj = new QuesObject();
    obj.id = id;
    obj.fetch().then((ques: AV.Object) => {
      ques.increment('score', -1);
      ques.fetchWhenSave(true);
      return ques.save();
    }).then(newData => this.data = newData);
  }
}
