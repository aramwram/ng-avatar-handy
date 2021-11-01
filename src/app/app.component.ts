import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  form = this.fb.group({
    size: [140],
    email: [''],
    name: [''],
    img: ['https://i.pinimg.com/736x/ef/b4/56/efb4563befb0ae1bed74f004785f3f0f.jpg'],
    fallbackImg: ['https://www.kindpng.com/picc/m/163-1636340_user-avatar-icon-avatar-transparent-user-icon-png.png'],
    bgColor: [''],
    fallbackText: ['?'],
    borderColor: ['']
  });

  constructor(private fb: FormBuilder) {}
}
