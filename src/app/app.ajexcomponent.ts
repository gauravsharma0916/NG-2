
import { Component, OnInit } from '@angular/core'; // here we add oninit for feteching servvice data
import { Http } from '@angular/http';
import 'rxjs/Rx'; // add this file for use the map feature.
import { ConfigService } from './myservicedata';


@Component({
  selector: 'do-ajaxcall',
  template: `<h1>Here we do how to do ajax call</h1>
  <button type="button" (click)="hitservice()">Hit service</button>
  <h3>friends name list </h3>
  <ul *ngFor="let friend of friends">
  <li>{{friend.name}}</li>
  </ul>
  `,
  providers: [ConfigService]
  
  
})

export class ajaxComponent implements OnInit {
 public friends:any=[];
   
     constructor ( private configservice:ConfigService) {}
     ngOnInit(){
       this.configservice.getFriendsData().subscribe(myData=>this.friends=myData);
      
     }
    
//for hit service after click 
hitservice(){
  alert("data is"+this.friends);

}





  }
    



    
