import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



declare var sharesdk: any;
declare var ShareSDK: any;
/**
 * Generated class for the SharePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-share',
  templateUrl: 'share.html',
})
export class SharePage {

  public items = [{
    'title': '微信好友分享（文本）',
    'icon': 'Webchat',
    'description': 'Session',
    'color': '#E63135'
  },{
    'title': '微信朋友圈分享（文本）',
    'icon': 'Webchat',
    'description': 'Timeline',
    'color': '#E63135'
  },{
    'title': '新浪微博分享（文本）',
    'icon': 'Webchat',
    'description': 'SinaWeibo',
    'color': '#E63135'
  }];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SharePage');
  }

  share(item) {
    var text = "Hello ZM.";
    var shareinfo = { text: text };
    console.log(item.icon);
    if (item.icon == 'Webchat') {
      if (item.description == 'Timeline') {
        if ("undefined" != typeof ShareSDK && "undefined" != typeof sharesdk) {
          console.log("Timeline");
          sharesdk.isInstallClient.promise(ShareSDK.ClientType.Wechat).then(function (isInstall) {
            if (isInstall) {
              console.log("begin sharing.");
              sharesdk.share(ShareSDK.PlatformType.WechatTimeline, ShareSDK.ShareType.Text,
                shareinfo,
                function () {
                  //alert("分享成功！");
                }, function (fail) {
                  if (fail.state == ShareSDK.ResponseState.Cancel) {
                    //alert('cancel！');
                  } else {
                    //alert('failed！: ' + fail.error);
                  }
                });
            } else {
              alert("未安装微信客户端");
            }
          });
        }
      }
      if (item.description == 'Session') {
        if ("undefined" != typeof ShareSDK && "undefined" != typeof sharesdk) {
          console.log("Session");
          sharesdk.isInstallClient.promise(ShareSDK.ClientType.Wechat).then(function (isInstall) {
            if (isInstall) {
              console.log("begin sharing.");
              sharesdk.share(ShareSDK.PlatformType.WechatSession, ShareSDK.ShareType.Text,
                shareinfo,
                function () {
                  //alert("分享成功！");
                }, function (fail) {
                  if (fail.state == ShareSDK.ResponseState.Cancel) {
                    //alert('cancel！');
                  } else {
                    //alert('failed！: ' + fail.error);
                  }
                });
            } else {
              alert("未安装微信客户端");
            }
          });
        }
      }
      if (item.description == 'SinaWeibo') {
        if ("undefined" != typeof ShareSDK && "undefined" != typeof sharesdk) {
          console.log("SinaWeibo");
          sharesdk.isInstallClient.promise(ShareSDK.ClientType.SinaWeibo).then(function (isInstall) {
            if (isInstall) {
              console.log("begin sharing.");
              sharesdk.share(ShareSDK.PlatformType.SinaWeibo, ShareSDK.ShareType.Text,
                shareinfo,
                function () {
                  //alert("分享成功！");
                }, function (fail) {
                  if (fail.state == ShareSDK.ResponseState.Cancel) {
                    //alert('cancel！');
                  } else {
                    //alert('failed！: ' + fail.error);
                  }
                });
            } else {
              alert("未安装微博客户端");
            }
          });
        }
      }
    }
  }

}
