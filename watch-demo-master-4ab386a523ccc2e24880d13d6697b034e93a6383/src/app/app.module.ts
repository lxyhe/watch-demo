import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HttpModule } from '@angular/http';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { Chat } from '../pages/chat/chat';
import { SlidePage } from '../pages/slide/slide';
import { TransperntHeadPage } from '../pages/transpernt-head/transpernt-head';
import { CustomDialPlatePage } from '../pages/custom-dial-plate/custom-dial-plate';
import { WatchContactPage } from '../pages/watch-contact/watch-contact';
import { PhoneContactPage } from '../pages/phone-contact/phone-contact';
import { SharePage } from '../pages/share/share';
 
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
import { FileChooser } from '@ionic-native/file-chooser';
import { FilePath } from '@ionic-native/file-path';
import { File } from '@ionic-native/file';
import { Camera } from '@ionic-native/camera';
import { Media } from '@ionic-native/media';
import { Contacts } from '@ionic-native/contacts';


import {ChatService} from "../providers/chat-service";
import {RelativeTime} from "../pipes/relative-time";
import {EmojiPickerComponent} from "../components/emoji-picker/emoji-picker";
import {EmojiProvider} from "../providers/emoji";

import {bleServe } from '../providers/bleServe';
import { BLE } from '@ionic-native/ble';

//import { Contacts } from  '../providers/contacts';
import { ContactsUil } from '../providers/contactsutil';
import { CustomComponent } from '../components/custom/custom';
import { MySlideComponent } from '../components/my-slide/my-slide';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    Chat,
    RelativeTime,
    EmojiPickerComponent,
    CustomComponent,
    MySlideComponent,
    SlidePage,
    TransperntHeadPage,
    CustomDialPlatePage,
    WatchContactPage,
    PhoneContactPage,
    SharePage
  ],
  imports: [
    HttpModule,
    BrowserModule,
     IonicModule.forRoot(MyApp, {
      tabsHideOnSubPages: true,
      backButtonText: "返回",
      iconMode: 'ios',
      modalEnter: 'modal-slide-in',
      modalLeave: 'modal-slide-out',
      tabsPlacement: 'bottom',
      pageTransition: 'ios-transition'
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    SlidePage,
    TabsPage,
    Chat,
    EmojiPickerComponent,
    CustomComponent,
    MySlideComponent,
    TransperntHeadPage,
    CustomDialPlatePage,
    WatchContactPage,
    PhoneContactPage,
    SharePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    BluetoothSerial,
    FileChooser,
    File,
    FilePath,
    Camera,
    ChatService,
    EmojiProvider,

    BLE,
    bleServe,

    Media,
    Contacts,
    ContactsUil,

    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
