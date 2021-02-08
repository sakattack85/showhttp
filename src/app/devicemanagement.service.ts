import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DevicemanagementService {
  getdevices() {
    return this.http.get('https://showhttp-bab7b-default-rtdb.firebaseio.com/Devices.json')
  }

  postdevice(){
 
      return this.http.post('https://showhttp-bab7b-default-rtdb.firebaseio.com/Devices.json', {name:'new device'})
    
  }
  constructor(private http:HttpClient) { 

  }


}
