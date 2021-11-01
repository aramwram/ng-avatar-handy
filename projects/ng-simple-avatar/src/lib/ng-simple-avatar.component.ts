import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
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

    this.fontSize = this.config.size / 2.6;
  }

  @Input() set img(value: string) {
    this.config.img = value;
  }

  @Input() set fallbackImg(value: string) {
    this.config.fallbackImg = value;
  }

  @Input() set bgColor(value: string) {
    this.bgColorSet = !!value;
    this.config.bgColor = value;
  }

  @Input() set borderColor(value: string) {
    this.config.borderColor = value;
  }

  @Input() set name(value: string) {
    this.nameSet = !!value;

    this._name = value;

    this.config.text = this.setTextFromName(value);

    if (!this.bgColorSet) {
      this.config.bgColor = this.generateColor();
      this.fgColor = this.getFgColor(this.config.bgColor);
    }
  }

  @Input() set email(value: string) {
    this._email = value;

    if (this.nameSet) {
      return;
    }

    this.config.text =  this.setTextFromEmail(value);

    if (!this.bgColorSet) {
      this.config.bgColor = this.generateColor();
      this.fgColor = this.getFgColor(this.config.bgColor);
    }
  }

  @Input() fallbackText(value: string) {
    this.config.fallbackText = value;
  }

  config: NgSimpleAvatarConfig = {};
  fgColor: '#000000' | '#FFFFFF';
  fontSize = 14;

  private nameSet = false;
  private bgColorSet = false;
  private _name: string;
  private _email: string;

  constructor(private cdRef: ChangeDetectorRef) {
    console.log(this);
  }

  ngOnInit(): void {}

  onError(): void {
    this.img = '';

    if (!this.config.text) {
      this.config.text = this.config.fallbackText || '?';
    }

    this.cdRef.markForCheck();
  }

  private setTextFromEmail(email: string): string {
    if (!email) {
      return '';
    }

    const name: string = email.split('@')[0];

    return this.setTextFromName(name, /\./);
  }

  private setTextFromName(name: string, sep: RegExp = new RegExp(/ +/)): string {
    if (!name) {
      return '';
    }

    let initials: string = name.split(sep).splice(0, 2).filter((part) => !!part).map((part) => part[0].toUpperCase()).join('');

    if (initials.length === 1) {
      const capitals: string = name.split('').filter((letter) => !!letter.match(/^[A-Z]$/)).slice(0, 2).join('');

      if (capitals.length === 2) {
        initials = capitals;
      }
    }

    return initials;
  }

  private generateColor(): string {
    const text = ((this._name || '') + (this._email || '')) || this.config.text || '?';

    let hash = 0;

    for (let i = 0; i < text.length; i++) {
      // tslint:disable-next-line:no-bitwise
      hash = text.charCodeAt(i) + ((hash << 5) - hash);
    }

    let colour = '#';

    for (let i = 0; i < 3; i++) {
      // tslint:disable-next-line:no-bitwise
      const val = (hash >> (i * 8)) & 0xFF;

      colour += ('00' + val.toString(16)).substr(-2);
    }

    return colour;
  }

  private getFgColor(bgColor: string): '#000000' | '#FFFFFF' {
    if (!bgColor) {
      return '#FFFFFF';
    }

    if (bgColor.indexOf('#') === 0) {
      bgColor = bgColor.slice(1);
    }

    // convert 3-digit hex to 6-digits.
    if (bgColor.length === 3) {
      bgColor = bgColor[0] + bgColor[0] + bgColor[1] + bgColor[1] + bgColor[2] + bgColor[2];
    }

    if (bgColor.length !== 6) {
      throw new Error('Invalid hex color');
    }

    const r = parseInt(bgColor.slice(0, 2), 16);
    const g = parseInt(bgColor.slice(2, 4), 16);
    const b = parseInt(bgColor.slice(4, 6), 16);

    // https://stackoverflow.com/a/3943023/112731
    return (r * 0.299 + g * 0.587 + b * 0.114) > 186 ? '#000000' : '#FFFFFF';
  }
}
