import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective {
  // tslint:disable-next-line: max-line-length
  colors = ['turquoise', 'pink', 'yellow', 'red', 'orange', 'grey', 'white', 'green', 'blue', 'black', 'purple', 'hotpink', 'darkblue', 'darkgreen', 'brown', 'coral', 'lavender'];
  @HostBinding('style.color') color: string;
  @HostBinding('style.borderColor') borderColor: string;
  constructor() { }
  // tslint:disable-next-line: typedef
  @HostListener('keyup') changeColor() {
    const randomColor = Math.floor(Math.random() * this.colors.length);
    this.color = this.colors[randomColor];
    this.borderColor = this.colors[randomColor];

  }
}
