import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { NgSimpleAvatarConfig } from './ng-simple-avatar.component.types';

@Component({
  selector: 'ng-simple-avatar',
  templateUrl: './ng-simple-avatar.component.html',
  styleUrls: ['./ng-simple-avatar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgSimpleAvatarComponent implements OnInit {
  @Input() set size(value: number | string) {
    this.config.size = parseInt(String(value), 10);
  }

  @Input() set img(value: string) {
    this.config.img = value;
  }

  @Input() set fallbackImg(value: string) {
    this.config.fallbackImg = value;
  }

  @Input() set bgColor(value: string) {
    this.config.bgColor = value;
  }

  @Input() set name(value: string) {
    this.nameSet = !!value;
    // Fix it
    this.config.text = this.setTextFromName(value);
  }

  @Input() set email(value: string) {
    if (this.nameSet) {
      return;
    }

    this.config.text =  this.setTextFromEmail(value);
  }

  config: NgSimpleAvatarConfig = {};

  private nameSet = false;

  constructor() {}

  ngOnInit(): void {}

  private setTextFromEmail(email: string): string {
    if (!email) {
      return '';
    }

    const name: string = email.split('@')[0];

    return this.setTextFromName(name);
  }

  private setTextFromName(name: string): string {
    if (!name) {
      return '';
    }

    let initials: string = name.split(/ +/).splice(0, 2).filter((part) => !!part).map((part) => part[0].toUpperCase()).join('');

    if (initials.length === 1) {
      const capitals: string = name.split('').filter((letter) => !!letter.match(/^[A-Z]$/)).slice(0, 2).join('');

      if (capitals.length === 2) {
        initials = capitals;
      }
    }

    return initials;
  }
}
