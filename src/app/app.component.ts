import { Component,OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
   FirstName:string
   LastName:string
   title:string
  constructor(){}
  ngOnInit()
  {
    this.FirstName='Abirami'
    this.LastName='Bharanidharan'
  }
   displaytitle(first,last)
   {
     this.FirstName=first
     this.LastName=last
     this. title=first + " " + last
    console.log(`Title is ${first} ${last}`)  
   }
  
}
