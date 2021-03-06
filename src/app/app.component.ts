import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Device } from './device';
import { DevicemanagementService } from './devicemanagement.service';
import { User } from './user';

@Component({
  providers:[DevicemanagementService],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  myusers=[];
  mydevices=[]
  title = 'showhttp';
constructor(private http:HttpClient, private devicemanagement:DevicemanagementService){

}

getdata(){
  this.http.get("https://showhttp-bab7b-default-rtdb.firebaseio.com/Users.json")
  .subscribe((response:any)=>{
  for(let key in response){
    this.myusers.push(new User(key, response[key].name, response[key].email))
  }

  })
}

insertuser(){
  this.http
  .post("https://showhttp-bab7b-default-rtdb.firebaseio.com/Users.json",
  {name:'iosif', email:'iosif@com'}).subscribe((response:any)=>{
    this.myusers.push(new User(response.name,'iosif','iosif@com'))
  })

}

edituser(id:string){
  this.http
  .put("https://showhttp-bab7b-default-rtdb.firebaseio.com/Users/"+ id +".json", {name:"viktor", email:"@mail.com"}).subscribe(
    (response:any)=>{
      for(let i=0; i<this.myusers.length;i++){
        if(this.myusers[i].id==id){
        this.myusers[i].name=response.name
        this.myusers[i].email=response.email
        }
      }
    }
  )
}

deleteuser(id:string){
  this.http
  .delete('https://showhttp-bab7b-default-rtdb.firebaseio.com/Users/'+ id +".json")
  .subscribe((response)=>{
    for(let i=0; i<this.myusers.length;i++){
      if(this.myusers[i].id==id){
     this.myusers.splice(i,1)
      }
    }
  })
}

ngOnInit(){
  this.getdata();
  this.devicemanagement.getdevices().subscribe(
    (response)=>{
      for(let key in response){
        this.mydevices.push(new Device(key, response[key].name))
      }
    }
  )
}

}
