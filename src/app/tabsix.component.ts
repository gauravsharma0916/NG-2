'use strict';
import { Component,Input } from '@angular/core';
import { ConfigService } from './myservicedata';
 
 

@Component({
  selector: 'tab-six',
  templateUrl: './tabsix.component.html'  
})
  
  
export class tabsixComponent {
    @Input() inputArrayIn;
    // private pm:any;
  //public inputArray1:any;
  isShowHide:boolean=true;
   showData(){
  this.isShowHide=!this.isShowHide;
   console.log("value of inputArrayIn"+ "is" + this.inputArrayIn);
 }
// ngOnInit() {
// this.pm=inputArrayIn;
// }
  
  
   }
   
       
   
   

