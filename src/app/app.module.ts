import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {
  MdButtonModule, MdCardModule, MdDialogModule, MdIconModule, MdInputModule, MdListModule, MdSidenavModule,
  MdSnackBarModule,
  MdToolbarModule
} from '@angular/material';

import 'hammerjs';

import {AppComponent} from './app.component';
import {AppInputDialogComponent} from './app-input-dialog.component';
import {AppViewDialogComponent} from './app-view-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    AppInputDialogComponent,
    AppViewDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MdIconModule,
    MdListModule,
    MdSidenavModule,
    MdButtonModule,
    MdToolbarModule,
    MdDialogModule,
    MdInputModule,
    MdSnackBarModule,
    MdCardModule
  ],
  providers: [],
  bootstrap: [AppComponent, AppInputDialogComponent, AppViewDialogComponent]
})
export class AppModule {
}
