import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgSimpleAvatarModule } from 'projects/ng-simple-avatar/src/public-api';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    NgSimpleAvatarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
