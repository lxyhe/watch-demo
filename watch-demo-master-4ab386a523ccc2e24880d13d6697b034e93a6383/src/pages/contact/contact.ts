import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
declare var AMap;
declare var geolocation;

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
 @ViewChild('map_container') map_container: ElementRef;
 map: any;
 public a_mark;
 public marker;
 public lineArr;
 private pointList: Array<any> = [
    {
      lng:116.397458,
      lat:39.90923
    },
    {
      lng:116.397428,
      lat:39.92923
    },
    {
      lng:116.407428,
      lat:39.82923
    },
    {
      lng:116.417428,
      lat:39.73923
    }
   ];
  constructor(
    public navCtrl: NavController,

    ) {
      this.init()
      
      
  }
  init(){

      setTimeout(() => {
      this.map = new AMap.Map(this.map_container.nativeElement, {
        view: new AMap.View2D({//创建地图二维视口
          resizeEnable: true,
          zoom: 11,
          center: [116.397428, 39.90923]
        })
      });
      AMap.plugin(['AMap.ToolBar', 'AMap.Scale', 'AMap.OverView'],
        () => {
          this.map.addControl(new AMap.ToolBar());

          this.map.addControl(new AMap.Scale());

          // this.map.addControl(new AMap.OverView({isOpen:true}));
        });
        this.map.on("complete", this.inits());

    }, 1);
   


  }
   completeEventHandler(x,y){ 
    
    this.marker = new AMap.Marker({
            map: this.map,
            position: [x, y],
            icon: "http://webapi.amap.com/images/car.png",
            offset: new AMap.Pixel(-26, -13),
            autoRotation: true
    });  
     
    var lngX ;  
    var latY ;         
    this.lineArr = new Array();   

     for(var i = 1;i<this.pointList.length;i++){
        lngX = this.pointList[i].lng;
        latY = this.pointList[i].lat;
        this.lineArr.push(new AMap.LngLat(lngX,latY));
     }
     
    //绘制轨迹  
    var polyline = new AMap.Polyline({  
        map:this.map,  
        path:this.lineArr,  
        strokeColor:"#e4393c",//线颜色  
        strokeOpacity:1,//线透明度  
        strokeWeight:3,//线宽  
        strokeStyle:"dotted",//线样式  
    });  

   this.map.setFitView();
  }  
  startRun(){
    var x=this.pointList[0].lng;
    var y=this.pointList[0].lat
    
    this.completeEventHandler(x,y);
    this.marker.moveAlong(this.lineArr,80);     //开始轨迹回放
   //this.marker.moveAlong(this.lineArr, 500);
    
  }
  inits(){  
     setTimeout(() => {
     this.startRun();   
     }, 1);
  }      

}

