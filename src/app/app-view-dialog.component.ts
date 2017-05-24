import {Component, Inject} from '@angular/core';
import {MD_DIALOG_DATA} from '@angular/material';
import {Http} from '@angular/http';
import {options} from './app.component';

@Component({
  selector: 'app-view-dialog',
  templateUrl: './app-view-dialog.component.html',
  styleUrls: ['./app-view-dialog.component.css']
})
export class AppViewDialogComponent {
  constructor(@Inject(MD_DIALOG_DATA) public data, private http: Http) {}

  updateScore(id: string, score: number): void {
    this.http.put('https://api.leancloud.cn/1.1/classes/Ques/' + id,
                  '{"score":{"__op":"Increment","amount":' + score + '}}',
                  options)
            .subscribe(() => this.data.score += score);
  }

  thumbUp(id: string): void {
    this.updateScore(id, 1);
  }

  thumbDown(id: string): void {
    this.updateScore(id, -1);
  }
}
