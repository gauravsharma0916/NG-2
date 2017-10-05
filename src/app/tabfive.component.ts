import { Component } from '@angular/core';
import { ConfigService } from './myservicedata';
 
 

@Component({
  selector: 'tab-five',
  templateUrl: './tabfive.component.html'
  
  
})
  
export class tabfiveComponent {
  // public inputArray:any=[];


  inputArray=["one","two","three","four","five","six","seven","eight","nine","ten"];

demo(){
  let first_company={
    name:"Accenuter",
    strenth:"200000",
    salary:"27000",
    profile:"ui developer"
  }
  let second_company={
    name:"Hcl tech",
    strenth:"200000",
    salary:"47000",
    profile:"ui developer"
  }

let information={
  first:first_company,
  second:second_company
                }

     }





}



