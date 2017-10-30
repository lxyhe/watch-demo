import { Component, ViewChildren, ViewChild, ChangeDetectorRef } from '@angular/core';
import { NavController, Content, LoadingController, ToastController } from 'ionic-angular';
import { Contacts, ContactField, ContactName, ContactFindOptions, ContactFieldType, IContactField } from '@ionic-native/contacts';
import { ContactsUil } from '../../providers/contactsutil';
import { Contact } from "../../models/contact.model";
import { Group } from "../../models/group.model";

/**
 * Generated class for the PhoneContactPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-phone-contact',
  templateUrl: 'phone-contact.html',
})
export class PhoneContactPage {

  index: string = 'A';
  showModal: boolean = false;
  timeout: any;
  indexes: Array<string> = "ABCDEFGHIJKLMNOPQRSTUVWXYZ#".split('');
  offsetTops: Array<number> = [];
  cucumber: boolean;
  mycontacts: Group[] = [];
  @ViewChildren('IonItemGroup') ionItemGroup;
  @ViewChild(Content) content: Content;

  constructor(public navCtrl: NavController,
    public ref: ChangeDetectorRef,
    public loadingCtrl: LoadingController,
    private contacts: Contacts,
    public toastCtrl: ToastController,
    private contactsutil: ContactsUil
  ) {
    let options = new ContactFindOptions();
    let fields: ContactFieldType[];
    fields = ["displayName", "name", "phoneNumbers"];
    options.filter = "";
    options.multiple = true;
    options.hasPhoneNumber = true;
    this.contacts.find(fields, options).then((result) => {
      console.log(JSON.stringify(result));
      var cs: Contact[] = [];
      for (var i = 0; i < result.length; i++) {
        var contact = new Contact();
        contact.displayName = result[i].name.formatted;
        contact.name = result[i].phoneNumbers[0].value;
        contact.chek = true;
        contact.id = result[i].id;
        cs.push(contact)
      }
      console.log(cs);
      this.mycontacts = [];
      this.mycontacts = this.contactsutil.grouping(cs);
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PhoneContactPage');
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
        this.ref.detectChanges();
        return;
      }
    }
  }

  createModal() {
    clearTimeout(this.timeout);
    this.showModal = true;
    this.timeout = setTimeout(() => {
      this.showModal = false;
      this.ref.detectChanges();
    }, 800)
  }
  clickIcon(item) {
    item.chek = !item.chek;
  }

  save() {
    let toast = this.toastCtrl.create({
      message: '正在导入手机通讯录...',
      duration: 3000,
      position: 'middle'
    });
    toast.present();
  }
}
