import {Component, OnInit} from '@angular/core';
import {MdDialog, MdSnackBar} from '@angular/material';
import {AppInputDialogComponent, Ques} from './app-input-dialog.component';
import {AppViewDialogComponent} from './app-view-dialog.component';
import {Headers, Http, RequestOptions} from '@angular/http';

export const headers = new Headers({
  'X-LC-Id': 'ncucSqWquNS5qSBCNrqEhA8O',
  'X-LC-Key': 'd6cARxGcTwgyi0IGz7ss7LHp'
});

@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  questions = [];

  constructor(public dialog: MdDialog, public snackBar: MdSnackBar, private http: Http) { }

  getQues(): void {
    const options = new RequestOptions({
      headers: headers,
    });
    const param = encodeURI('cql=select * from Ques limit 0,100 order by -score, -createdAt');
    this.http.get('https://api.leancloud.cn/1.1/cloudQuery?' + param, options)
              .map(res => res.json())
              .subscribe(res => this.questions = res.results);
  }

  ngOnInit(): void {
    this.getQues();
  }

  openDialog() {
    const dialogRef = this.dialog.open(AppInputDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result && result.name && result.ques) {
        const snackBar = this.snackBar;
        headers.append('Content-Type', 'application/json');
        const options = new RequestOptions({
          headers: headers,
        });
        this.http.post('https://api.leancloud.cn/1.1/classes/Ques', result, options)
                  .subscribe(() => {
                    snackBar.open('Dear ' + result.name + ', thanks for your feedback!', '', {duration: 2000});
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
