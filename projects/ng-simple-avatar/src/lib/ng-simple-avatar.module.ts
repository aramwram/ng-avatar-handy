import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { NgSimpleAvatarComponent } from './ng-simple-avatar.component';
import { ngSimpleAvatarConfig } from './ng-simple-avatar.tokens';
import { NgSimpleAvatarConfig } from './ng-simple-avatar.types';


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
export class NgSimpleAvatarModule {
  static forRoot(config?: NgSimpleAvatarConfig): ModuleWithProviders<NgSimpleAvatarModule> {
    return {
      ngModule: NgSimpleAvatarModule,
      providers: [
        { provide: ngSimpleAvatarConfig, useValue: config || {} }
      ]
    };
  }
}
