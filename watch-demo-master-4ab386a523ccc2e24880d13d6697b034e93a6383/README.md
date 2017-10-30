This is a starter template for [Ionic](http://ionicframework.com/docs/) projects.

# 说明
```
 - 这是一个ionic3 项目  
``` 
##  如何使用
```bash
  $ git clone ssh://git@113.31.132.131:10022/HybirdApp/watch-demo.git
  $ npm install 下载项目依赖
  $ ionic serve 执行项目
  $ ionic info 查看版本号
  $ ionic cordova platform add android/ios 添加android/ios平台 
    注：ios 有权限问题 例：sudo ionic cordova platform add ios
  $ ionic cordova run android/ios --prod 运行在手机端
  $ ionic cordova build android/ios --prod --relese 打包项目
```
##  支持平台
  ```
  * android
  * ios
  * webApp
  * 注 ： 不建议 andorid 5.0以下手机测试
 ```
##  插件列表及地址
 
> 1.    [微信支付](https://github.com/xu-li/cordova-plugin-wechat) 
> 2.    [支付宝支付](https://github.com/hhjjj1010/cordova-plugin-alipay-v2) 
> 3.    [银联支付](https://github.com/woguava/cordova-plugin-unionpay) 
> 4.    [扫码](http://ionicframework.com/docs/native/barcode-scanner) 
> 5.    [蓝牙(ble)](http://ionicframework.com/docs/native/ble) 
> 6.    [打开文件](http://ionicframework.com/docs/native/file-chooser) 
> 7.    [相机](http://ionicframework.com/docs/native/camera) 
> 8.    [分享](https://github.com/zhaolin0801/cordova-plugin-sharesdk) 
> 9.    [录音](https://github.com/emj365/cordova-plugin-audio-recorder-api) 
> 10.   [通讯录](http://ionicframework.com/docs/native/contacts) 
> 11.   [android签名工具](https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1419319167&token=&lang=zh_CN)

## 插件APPID

    * 插件名字           插件AppId                   插件用法 
    * 微信支付            wx4786e32f1967c6b2         [微信支付](https://github.com/xu-li/cordova-plugin-wechat) 
    
    * 支付宝支付          2016082000293972           [支付宝支付](https://github.com/hhjjj1010/cordova-plugin-alipay-v2)  
    
    * 银联支付            1015325590                 [银联支付](https://github.com/woguava/cordova-plugin-unionpay)  
    
    * 友盟                59804a3875ca35066a000c8c   [友盟集成](http://dev.umeng.com/analytics/h5/phonegap-doc)  
    
    * 分享                见图下插件↓                [分享](https://github.com/zhaolin0801/cordova-plugin-sharesdk)   
  
## 分享插件
  * ionic cordova plugin add https://github.com/Jebel8296/cordova-plugin-sharesdk.git 
  * --variable SHARESDK_ANDROID_APP_KEY=1e1db5c6b3478 
  * --variable SHARESDK_IOS_APP_KEY=1e1db5c6b3478 
  * --variable WECHAT_APP_ID=wx2dab36e2b299b7d0 
  * --variable WECHAT_APP_SECRET=6ae7217d9f3335d854a7af639679fe7c
  * --variable WEIBO_APP_ID=807681632 
  * --variable WEIBO_APP_SECRET=16ec473bbc68556df21afff7fd505fbc
  * --variable WEIBO_REDIRECT_URL=https://api.weibo.com/oauth2/default.html 
  * --variable QQ_IOS_APP_ID=1104672663 
  * --variable QQ_IOS_APP_HEX_ID=41D7F797 
  * --variable QQ_IOS_APP_KEY=0ZPH9Tc7oFwSJTTh 
  * --variable QQ_ANDROID_APP_ID=1104672663 
  * --variable QQ_ANDROID_APP_KEY=0ZPH9Tc7oFwSJTTh
  
## 其他技术
```
  * 图片剪辑功能
  * 仿今日头条title滑动
  * 沉浸式状态栏
  * 高德地图
  * 聊天（支持文字和emoji）
  * 友盟（统计）
```
## 问题
```
  * Wechat支付 和 sharesdk 有相同类名冲突安装时候可选其1（两个插件选择一下，因为他们中间有交集）（已解决 类名冲突 修改其中一个插件的类名就可以了）
  * 支付宝支付在ios有点问题---正在解决中.....
```
  