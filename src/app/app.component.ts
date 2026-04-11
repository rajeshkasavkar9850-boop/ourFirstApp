import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'I Love Angular';
  userName : string = `I am Raj`;

  skills : Array<string> = ['HTML','JS','CSS','TS','Angular'];
}
