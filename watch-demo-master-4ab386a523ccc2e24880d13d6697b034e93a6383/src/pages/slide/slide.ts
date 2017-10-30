import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Slides } from 'ionic-angular';
import { Events } from 'ionic-angular';
@Component({
  selector: 'page-slide',
  templateUrl: 'slide.html'
})

export class SlidePage{
    public pageSlides: string[] = ["推荐", "热点", "北京", "视频", "头条号", "社会", "问答", "娱乐","汽车"];
    public pageIndex: number = 0;
    public pageContent: string;  
    public SlideTitle:string="推荐";
    public PageNumber:number= 7;
    @ViewChild(Slides) slides: Slides;
    isShow:boolean;
    constructor(public events: Events){
         this.setPageContent();
    }
  // onSlideClick(index) {
  //   this.pageIndex = index;
  //   this.setPageContent();
  //   console.log("111")
  // }

  setPageContent() {
    this.pageContent = this.pageSlides[this.pageIndex];
  }
  slideChanged(){
     let currentIndex = this.slides.getActiveIndex();
    console.log("页面索引是"+ currentIndex);
    if(currentIndex<=this.pageSlides.length-1){
      this.SlideTitle=this.pageSlides[currentIndex];
      this.events.publish('slide:index', currentIndex);
     if(currentIndex>(this.PageNumber-1)){
      this.events.publish('slide:forward');
     }
    }
    
  }
  onSlideClick(index) {
    this.slides.slideTo(index, 500);
  }
  nextSlide(){
    this.slides.slideNext(500, false);
  }
}