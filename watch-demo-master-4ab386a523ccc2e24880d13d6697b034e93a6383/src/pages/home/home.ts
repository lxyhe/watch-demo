import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
import { AlertController } from 'ionic-angular';
import { FileChooser } from '@ionic-native/file-chooser';
import { FilePath } from '@ionic-native/file-path';
import { ActionSheetController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Chat } from '../chat/chat';

import { BLE } from '@ionic-native/ble';
import { bleServe } from '../../providers/bleServe';
declare var cordova: any;
declare var mqtt: any;

import { Platform } from 'ionic-angular';
import { Media } from '@ionic-native/media';
import { CustomDialPlatePage } from '../custom-dial-plate/custom-dial-plate';
import { WatchContactPage } from '../watch-contact/watch-contact';
import { SharePage } from '../share/share';
declare var cordova: any;
declare var Wechat: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public SpeakText: string = "按住说话";
  public CustomData: string = "1111";
  public list = [{ "key": "you", "value": '优', "chek": true }, { "key": "liang", "value": '良', "chek": false }, { "key": "cha", "value": '差', "chek": false }];
  public data = { "key": "you", "value": '优', "chek": true };
  public img = "assets/img/tutu1.jpg";
  public items = [{
    'title': '通讯录',
    'icon': 'angular',
    'description': '通讯录',
    'color': '#E63135'
  }];
  constructor(
    public navCtrl: NavController,
    //private qrScanner: QRScanner
    private barcodeScanner: BarcodeScanner,
    private bluetoothSerial: BluetoothSerial,
    public alertCtrl: AlertController,
    private fileChooser: FileChooser,
    private filePath: FilePath,
    public actionSheetCtrl: ActionSheetController,
    private camera: Camera,

    private ble: BLE,
    public scanxiba: bleServe,

    private platform: Platform,
    private media: Media,

  ) {

  }
  biaopan() {
    this.navCtrl.push(CustomDialPlatePage);
  }
  onClick(e) {
    alert(e.from)
  }
  //录音
  recording(e) {
    this.SpeakText = "松开，结束";
    (<any>window).plugins.audioRecorderAPI.record(function (msg) {
      console.log('ok: ' + msg);
      //监听按钮离开事件
      e.target.addEventListener('touchend', (msg) => {
        this.SpeakText = "按住说话";
        var MediaObject = this.media.create(msg);
        MediaObject.play();
        MediaObject.onStatusUpdate.subscribe(status => console.log(status));
        MediaObject.onSuccess.subscribe(() => console.log('Action is successful'));
        MediaObject.onError.subscribe(error => console.log('Error!', error));

      }, false);
    }, function (msg) {
      console.log('ko: ' + msg);
    }, 20);
  }
  /**
   * 通讯录
   */
  tongxunlu(item) {
    this.navCtrl.push(WatchContactPage, { item: item });
  }
  fenxiang() {
    this.navCtrl.push(SharePage);
  }
  caijian() {
    let actionSheet = this.actionSheetCtrl.create({
      title: '相片选取',
      buttons: [
        {
          text: '相机',
          role: 'camera',
          handler: () => {
            const options: CameraOptions = {
              quality: 80,
              allowEdit: true,
              targetWidth: 800,
              targetHeight: 800,
              saveToPhotoAlbum: false,
              correctOrientation: true,
              destinationType: this.camera.DestinationType.FILE_URI,
              sourceType: this.camera.PictureSourceType.CAMERA,
            }
            this.camera.getPicture(options).then((imageData) => {
              this.img = imageData;
            }, (err) => {
              alert("错误" + err)
            });
          }
        }, {
          text: '相册',
          role: 'Photo',
          handler: () => {
            const options: CameraOptions = {
              quality: 80,
              allowEdit: true,
              targetWidth: 800,
              targetHeight: 800,
              sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
            }
            this.camera.getPicture(options).then((imageData) => {
              this.img = imageData;
            }, (err) => {
              alert("错误" + err)
            });
          }
        }, {
          text: '返回',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();


  }
  dakai() {
    this.fileChooser.open()
      .then((uri) => {
        console.log(uri);
        this.filePath.resolveNativePath(uri)
          .then(filePath => {
            console.log(filePath)
            alert("路径是" + filePath);
          })
          .catch(err => console.log(err));
      })
      .catch(e => console.log(e));
  }
  public chekFun(i) {
    let me = this;
    this.list.forEach(function (data, inde, array) {
      console.log(data);
      console.log(inde);

      if (i == inde) {
        console.log(i);
        data.chek = true;
        me.data = data;
      } else {
        data.chek = false
      }
    });
  }

  public submit() {
    console.log(this.data);
  }
  apply() {
    var orderInfo = 'app_id=2016082000293972&biz_content={"timeout_express":"30m","seller_id":"","product_code":"QUICK_MSECURITY_PAY","total_amount":"0.01","subject":"iphone手机","body":"我是测试数据","out_trade_no":"12345678901"}&charset=utf-8&format=json&method=alipay.trade.app.pay&notify_url=http://www.10020.cn&sign_type=RSA2&timestamp=2016-08-25 20:26:31&version=1.0';
    // var payInfo = orderInfo+'&sign="f2mnnWU%2be2QKSw2K9Uzly0Zo8vHjgObP2ZipOOWg%2fRkRrCxgbMwvUiLySyx%2f%2b0XONGuYEVW%2bedR6UhJXsMX2tSjuTYyAdtS7FHz%2bcxyKPR6l0YRYBWfAR4QFB6MSrBarnN5zknU3FyVlh5xfqzroYheBHpr4OcCJ7WIUAWfOY22JFhb89JomlVLdiDegeOY%2btesmmyS4Ri3pgTodyt7vfjhbrMx75gNudXGzH2qgJhZ9zMwAL41i6d4zamr89YRAX5VnN4T9W6tzIkSvvotAER9Xpnpi2bubSBmQwMC6QPMuC2aLLNSi5o7FTstpCMPJTufpMskbEZpAcplj1iq%2fJQ%3d%3d"&sign_type="RSA2"';
    var payInfo = 'partner="2088411310983701"&seller_id="bspay00@10020.cn"&out_trade_no="11714907"&subject="中麦通信10020话费充值"&body="中麦通信10020为您充值50.00元"&total_fee="0.01"&notify_url="http://www.10020.cn/aliPayRechargeBack.page"&service="mobile.securitypay.pay"&payment_type="1"&_input_charset="utf-8"&it_b_pay="15m"&show_url="m.alipay.com"&sign="DciLimk%2FU4LF2w%2BfSzACE1ZZbc4%2FzY9YxC9yiz11NnE9XTRErB%2B6QJmvdrRzdfu4WXHihwr7%2BTXgVEmUll7I8hQ2KeIlXChS79B6tBth5Ibxo6W%2BqeAxiXsDVmjhjquCuDtnbwVoBjRNypzIGgqVpijYciDHnWiIy8%2Ft7OHh49A%3D"&sign_type="RSA"';
    cordova.plugins.alipay.payment(payInfo, function success(e) {
      if (e.resultStatus == 9000) {
        alert("支付成功")
      } else if (e.resultStatus == 8000) {
        alert("正在处理中")
      } else if (e.resultStatus == 4000) {
        alert("订单支付失败")
      } else if (e.resultStatus == 6001) {
        alert("用户中途取消")
      } else if (e.resultStatus == 6002) {
        alert("网络连接出错")
      } else {
        alert("意外故障");
      }
    }, function error(e) {
      alert("支付异常，稍后再试")
    });
  }
  wxapply() {
    var params = {
      partnerid: '1219881801', // merchant id
      prepayid: 'wx201411101639507cbf6ffd8b0779950874', // prepay id
      noncestr: '1add1a30ac87aa2db72f57a2375d8fec', // nonce
      timestamp: '1439531364', // timestamp
      sign: '0CB01533B8C1EF103065174F50BCA001' // signed string
    };
    Wechat.sendPaymentRequest({
      partnerid: '1219881801',
      prepayid: 'wx201411101639507cbf6ffd8b0779950874',
      noncestr: '1add1a30ac87aa2db72f57a2375d8fec', // nonce
      timestamp: '1439531364', // timestamp
      sign: '0CB01533B8C1EF103065174F50BCA001' // signed string
    }).then(() => {
      alert("success");
    }).catch((error) => {
      alert(error);
    });
  }
  unionapply() {
    var tn = "439124475652718852201";//交易流水号 
    cordova.plugins.UnionPay.starPay(tn, (data) => {
      alert(data);
    }, (err) => {
      alert(err)
    });
  }

  //   QRscan(){
  //   this.qrScanner.prepare()
  //   .then((status: QRScannerStatus) => {
  //      if (status.authorized) {
  //        // camera permission was granted


  //        // start scanning
  //        let scanSub = this.qrScanner.scan().subscribe((text: string) => {
  //          console.log('Scanned something', text);

  //          this.qrScanner.hide(); // hide camera preview
  //          scanSub.unsubscribe(); // stop scanning
  //        });

  //        // show camera preview
  //        this.qrScanner.show();

  //        // wait for user to scan something, then the observable callback will be called

  //      } else if (status.denied) {
  //        // camera permission was permanently denied
  //        // you must use QRScanner.openSettings() method to guide the user to the settings page
  //        // then they can grant the permission from there
  //      } else {
  //        // permission was denied, but not permanently. You can ask for permission again at a later time.
  //      }
  //   }).catch((e: any) => console.log('Error is', e));
  // }
  saoma() {
    this.barcodeScanner.scan().then((barcodeData) => {
      alert("扫描成功" + barcodeData)
    }, (err) => {
      alert("出现错误" + err);
    });
  }
  lanya() {
    let prompt = this.alertCtrl.create({
      title: '连接',
      message: "请输入对方蓝牙号",
      inputs: [
        {
          name: 'lanya',
          placeholder: '在此处输入'
        },
      ],
      buttons: [
        {
          text: '返回',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: '连接',
          handler: data => {
            this.openlanya(data);
          }
        }
      ]
    });
    prompt.present();
  }
  openlanya(data) {
    if (this.bluetoothSerial.isEnabled()) {
      this.bluetoothSerial.enable().then((da) => {
        alert("打开成功" + da);
        this.bluetoothSerial.setName("华为荣耀v9哈哈")
        this.bluetoothSerial.setDiscoverable(1000);
        this.bluetoothSerial.connect(data).subscribe((data) => {
          alert("连接蓝牙设备成功" + data);
        })
      }).catch((e) => {
        alert("打开失败" + e)
        this.bluetoothSerial.showBluetoothSettings()
      })

    } else {
      alert("您的蓝牙不可用");
    }


  }
  blebut() {
    if (this.ble.isEnabled()) {
      this.ble.enable().then((data) => {
        //alert("enabled:"+data);
        this.ble.scan([], 10).subscribe(values => {
          var av = JSON.stringify(values);
          console.log("扫描结果：" + av);
          var obj = JSON.parse(av);
          console.log("扫描结果：" + obj.name);
          //alert("扫描结果："+av);
          if (obj.name == "baby-default-name") {
            this.ble.connect(obj.id).subscribe(data => {
              var aa = JSON.stringify(data)
              var connResult = JSON.parse(aa);
              console.log("连接结果：" + aa);
              //alert("连接结果："+aa);
              var cc = connResult.characteristics;
              console.log("cc==:" + cc);
              var ccc = JSON.stringify(cc);
              console.log("characteristics==:" + ccc);
              this.ble.isConnected(obj.id).then(data => {
                console.log("是否连接成功：" + JSON.stringify(data));
              });
              for (var i = 0; i < cc.length; i++) {
                if (cc[i].service == "abcd") {
                  console.log("连接的ble特征值：" + JSON.stringify(cc[i]));
                  var str = "支持中文吗? text？! zhi chi de.";
                  var ms = new Uint16Array(2);
                  ms[0] = 0x5168;
                  ms[1] = 0x90e8;
                  // var msa = this.bianma(str);
                  // var msda = new Uint8Array(msa);
                  // console.log("传输数据："+msda.buffer);
                  console.log("传输数据：" + ms);
                  console.log("传输数据：" + ms.buffer);
                  this.ble.write(obj.id, cc[i].service, cc[i].characteristic, ms.buffer).then(values => {
                    var va = JSON.stringify(values);
                    console.log("写入数据结果：" + va);
                    alert("写入数据结果：" + va);
                  }).catch(e => {
                    alert("写入失败：" + e);
                  });
                }
              }
            });
          }
        })
      }).catch((e) => {
        alert("ble打开失败" + e);
        this.ble.showBluetoothSettings();
      });
    } else {
      alert("ble不可用");
    }
  }
  bianma(str) {
    console.log('编码前:' + str);
    var ms = new Array();
    var total2str = "";
    for (var i = 0; i < str.length; i++) {
      var num10 = str.charCodeAt(i);  ///< 以10进制的整数返回 某个字符 的unicode编码
      var str2 = num10.toString(2);   ///< 将10进制数字 转换成 2进制字符串

      if (total2str == "") {
        total2str = str2;
        ms[i] = str2;
      } else {
        total2str = total2str + " " + str2;
        ms[i] = str2;
      }
    }
    console.log("编码后:" + total2str);
    return ms;
  }
  jiema(total2str) {
    var goal = "";
    var arr = total2str.split(' ');
    for (var i = 0; i < arr.length; i++) {
      var str2 = arr[i];
      var num10 = parseInt(str2, 2); ///< 2进制字符串转换成 10进制的数字
      goal += String.fromCharCode(num10); ///< 将10进制的unicode编码, 转换成对应的unicode字符
    }
    console.log('解码后:' + goal);
  }

  mqtt() {
    var host = "ws://192.168.108.196:5672/mqtt";
    var client = mqtt.connect(host, {
      username: "dev",
      password: "dev"
    });
  }


  chat() {
    console.log("111");
    this.navCtrl.push(Chat, {
      toUserId: '210000198410281948',
      toUserName: '小白'
    });
  }
  goscore() {
    if (this.platform.is('ios')) {
      window.open('itms-apps://itunes.apple.com/us/app/domainsicle-domain-name-search/id511364723?ls=1&mt=8');
    } else if (this.platform.is('android')) {
      window.open('market://details?id=<package_name>');
    }
  }
  GetPhotoClips() {


  }
}
