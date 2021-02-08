import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  myusers=[];
  title = 'showhttp';
constructor(private http:HttpClient){

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

ngOnInit(){
  this.getdata();
}

}
