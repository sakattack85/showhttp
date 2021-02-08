import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

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
 
}

ngOnInit(){
  this.getdata();
}

}
