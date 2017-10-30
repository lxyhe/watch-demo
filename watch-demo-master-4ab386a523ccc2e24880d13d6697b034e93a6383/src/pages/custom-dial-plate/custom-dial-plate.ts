import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController ,NavParams} from 'ionic-angular';
declare var AlloyCrop: any;
declare var AlloyFinger: any;

/**
 * Generated class for the CustomDialPlatePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-custom-dial-plate',
  templateUrl: 'custom-dial-plate.html',
})
export class CustomDialPlatePage {
  @ViewChild('name') todoName: ElementRef;
  @ViewChild('names') todoName1: ElementRef;
  public crop_btn;
  public crop_result;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomDialPlatePage');
  }
    init() {
    this.crop_btn = this.todoName.nativeElement;
    this.crop_result = this.todoName1.nativeElement;
    console.log(this.crop_btn)
    console.log(this.crop_result)


    new AlloyCrop({
      image_src: "./assets/tutu1.jpg",
      circle: true,
      width: 200,
      height: 200,
      output: 1,
      ok: function (base64, canvas) {
        console.log(base64);
        console.log(canvas);
        this.crop_result.appendChild(canvas);
        

      },
      cancel: function () {
        console.log("111")
      }


    });


  }
}
