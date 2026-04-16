import { Component, OnInit } from '@angular/core';
import { postData } from './const/posts';
import { Ipost } from './models/posts';
import { stdArr } from './const/student';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'I Love Angular';
  userName : string = `I am Raj`;

  skills : Array<string> = ['HTML','JS','CSS','TS','Angular'];

  postsArr:Array<Ipost> = postData

  stdsArr = stdArr

  ngOnInit(): void{
    this.skills.forEach(s =>{
      console.log(s);
    })
  }
}


