import {Component, Input, Output, EventEmitter,ViewChild} from '@angular/core';
import { Events } from 'ionic-angular';

@Component({
  selector: 'my-slide',
  templateUrl: 'my-slide.html'
})
export class MySlideComponent {

  @Input("slides") slides: string[] = [];
  @Input("pageNumber") pageNumber: number = 5;
  @Output("slideClick") slideClick = new EventEmitter<number>();
  @ViewChild('tableToMeasure') elementView;
  selectedIndex: number = 0;

  constructor(public events: Events) {
     this.events.subscribe('slide:index', (data) => {
      console.log("订阅的index"+data);
      this.selectedIndex = data;
    });
     this.events.subscribe('slide:forward', () => {
      console.log("可以向前滑动了");
      console.log(this.elementView.nativeElement.offsetWidth);
    });
  }
  
  onClick(index) {
    this.selectedIndex = index;
    this.slideClick.emit(index);
  }
}
