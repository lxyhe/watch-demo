import { Component, ViewChildren, ViewChild, ChangeDetectorRef } from '@angular/core';
import { NavController, NavParams, Content, LoadingController } from 'ionic-angular';
import { PhoneContactPage } from '../phone-contact/phone-contact';
import { ContactsUil } from '../../providers/contactsutil';
/**
 * Generated class for the WatchContactPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-watch-contact',
  templateUrl: 'watch-contact.html',
})
export class WatchContactPage {
  index: string = 'A';
  showModal: boolean = false;
  timeout: any;
  indexes: Array<string> = "ABCDEFGHIJKLMNOPQRSTUVWXYZ#".split('');
  offsetTops: Array<number> = [];
  contacts: Array<any> = [];
  cucumber: boolean;
  @ViewChildren('IonItemGroup') ionItemGroup;
  @ViewChild(Content) content: Content;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public contactsSev: ContactsUil,
    public changeDetectorRef: ChangeDetectorRef,
    public loadingCtrl: LoadingController) {
    this.contactsSev.getContacts()
      .then(res => {
        this.contacts = this.contactsSev.grouping(res);
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WatchContactPage');
  }
  ionViewDidEnter() {
    this.getOffsetTops();
  }

  getOffsetTops() {
    this.offsetTops = this.ionItemGroup._results.map(ele => {
      return ele.nativeElement.offsetTop
    })
  }

  selectIndex(index: number) {
    this.index = this.indexes[index];
    const offsetTop = this.offsetTops[index];
    this.content.scrollTo(0, offsetTop, 300);
    this.createModal();
  }

  onScroll() {

    const threshold = 42;

    if (this.content.scrollTop < threshold) {
      this.index = this.indexes[0];
      return;
    }

    for (let i = this.offsetTops.length; i > 0; i--) {
      if (this.content.scrollTop + threshold >= this.offsetTops[i]) {
        this.index = this.indexes[i];
        this.changeDetectorRef.detectChanges();
        return;
      }
    }
  }

  createModal() {
    clearTimeout(this.timeout);
    this.showModal = true;
    this.timeout = setTimeout(() => {
      this.showModal = false;
      this.changeDetectorRef.detectChanges();
    }, 800)
  }
  clickIcon(item) {
    item.chek = !item.chek;
  }

  daoru() {
    this.navCtrl.push(PhoneContactPage);
  }

}
