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

interface Obj {
  Key: String;
  Value: String;
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
  ObjItems: Obj[] = [];
  constructor(){
    console.log(this.Users);
    for (let key of this.Users) {
      console.log("value?"+key);
      for(var i in key){
           this.Keys.push(i);
           console.log('key: ' +  i );
      }
     }
    this.Keys.shift();
    console.log(this.Keys);
  //   var arr = this.Users.map(user => ({
  //     data: user,
  //     label: label
  // }));
  //   this.Users.map((key,value)) =>
  //   {

  //   }
  }

}
