import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the CustomComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'custom',
  templateUrl: 'custom.html'
})
export class CustomComponent {
  @Input('data') data: string;
  @Output() parentClick = new EventEmitter();
  text: string;

  constructor() {
    console.log('Hello CustomComponent Component');
    this.text = 'Hello World';
  }
  MCClick() {
    this.parentClick.emit(
      {
        from: this.data
      }
    )
  }

}
