import { Injectable } from '@angular/core';
import { BLE } from '@ionic-native/ble';
@Injectable()
 export class bleServe {

    constructor(private ble:BLE){

    }
    scanServe(){
        return new Promise((resolve, reject)=>{
        this.ble.scan([],10).toPromise().then((data)=>{
           var datas= data.json();
           resolve(datas);
        }).catch(e=>{
            reject(e);
        })     

        })
      
    }
 }