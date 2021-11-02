# Description
Simple yet configurable avatar component with image, initials, dynamic background and fallback system for invalid image URLs.

[![npm version](https://badge.fury.io/js/ng-social-links.svg)](https://badge.fury.io/js/ng-simple-avatar)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://github.com/aramwram/ng-simple-avatar/blob/master/LICENSE.md)
[![Open Source Love](https://badges.frapsoft.com/os/v2/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)

# Demo
You can clone the repo and start the application locally to watch ng-simple-avatar lib in action.

# Usage
Install package
```sh
npm i ng-simple-avatar
```
Add import to your module
```js
import { NgSimpleAvatarModule } from 'ng-simple-avatar';

@NgModule({
  imports: [
    ...
    NgSimpleAvatarModule,
  ],
  declarations: [],
  providers: []
})
```
Then in template:
```html
  <ng-simple-avatar [size]="64" img="https://i.pinimg.com/736x/ef/b4/56/efb4563befb0ae1bed74f004785f3f0f.jpg"></<ng-simple-avatar>
  <ng-simple-avatar name="Bob Marley" email="bob.marley@ebox.com"></<ng-simple-avatar>
  <ng-simple-avatar [size]="100" email="bob.marley@ebox.com" borderColor="brown"></<ng-simple-avatar>
```

## Options

| Option            | Type                           | Default                        | Description                                                                |
| ----------------- | ------------------------------ | ------------------------------ | -------------------------------------------------------------------------- |
| size              | number                         | 40                             | Avatar diameter in pixels.                                                 |
| name              | string                         | none                           | Name from which initials are generated (has higher priority than email).   |
| email             | string                         | none                           | Email from which initials are generated.                                   |
| img               | string                         | none                           | Avatar image (has higher priority than initials).                          |
| bgColor           | string                         | none                           | Background color to use if no image is provided. Generated if not set.     |
| borderColor       | string                         | none                           | Border color.                                                              |
| borderColor       | string                         | none                           | Border color.                                                              |
| fallbackImg       | string                         | none                           | Image to use when main image failed to load.                               |
| fallbackText      | string                         | ?                              | Text to display when initials cannot be generated.                         |

## Configuration
You can configure default ng-simple-avatar options:
```js
NgMaterialLoadingModule.forRoot({
  size: '64',
  fallbackImg: 'https://www.kindpng.com/picc/m/163-1636340_user-avatar-icon-avatar-transparent-user-icon-png.png',
  fallbackText: 'F',
  ...
})
```

The configuration interface looks like this:
```js
export interface NgSimpleAvatarConfig {
  size?: number;
  img?: string;
  fallbackImg?: string;
  bgColor?: string;
  borderColor?: string;
  text?: string;
  fallbackText?: string;
}
```

# Contributig to ng-simple-avatar
You are more than welcome to improve this library or create issues on the GitHub issue tracker.