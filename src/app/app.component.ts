import { Component } from '@angular/core';
import UsersJson from './users.json';
  
interface Report {
    ReportName: String;
    Accountingperiod: String;
    Category: {
      Row: String;
      Section: String;
      Dashboard: String;
      Report: String;
    }
    SectionIdentifier: String;
    UserID: String;
    Timestamp: String;
    Comment: String;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FormTest1';
  Users: Report[] = UsersJson;
  Keys = [""];
  Values = [""];
  
  constructor(){
    console.log(this.Users);
    for (let key of this.Users) {
      for(var i in key){
           console.log('key: ' +  i + 'value' );
           this.Keys.push(i);
      }
     }
     console.log(this.Keys);
  }
}
