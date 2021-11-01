import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgSimpleAvatarComponent } from './ng-simple-avatar.component';


@NgModule({
  declarations: [
    NgSimpleAvatarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NgSimpleAvatarComponent
  ]
})
export class NgSimpleAvatarModule { }
