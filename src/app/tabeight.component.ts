'use strict';
import { Component, OnInit } from '@angular/core';
import { ConfigService } from './myservicedata';
import { Router } from '@angular/router';      // add file for navigate from one page to another page 
import { FormBuilder ,FormsModule, FormGroup,FormControl,Validators} from '@angular/forms'; // add Validators for validations



@Component({
selector: 'tab-eight',
templateUrl: './tabeight.component.html'
})
export class tabeightComponent implements OnInit {
 public pincodeLength:any=6;
constructor( private formBuilder:FormBuilder) {}
myCustomForm : FormGroup;
// ({
//     name:new FormControl('Gaurav sharma',[Validators.required,Validators.minLength(4),Validators.maxLength(13)]),
//     email:new FormControl('gsonu.sharma@gmail.com'),
//     address:new FormGroup({
//         street:new FormControl(),
//         city:new FormControl(),
//         pincode:new FormControl(null,Validators.pattern('^[1-9][0-9]{4}$'))

//     })
    
// })

ngOnInit(){
    this.myCustomForm=this.formBuilder.group({
        name:['Gaurav sharma',[Validators.required,Validators.minLength(4),Validators.maxLength(13)]],
        email:['gsonu.sharma@gmail.com'],
        address:this.formBuilder.group({
            street:[],
            city:[],
            pincode:[null,Validators.pattern('^[1-9][0-9]{5}$')]


        })
        
    })
    

}
onSubmit(data){
    console.log("form fields values are", this.myCustomForm.value);
}

// my method

// pinlimitation(event){

    
   
//     // let pp =event.currentTarget.attributes.length;
//     // console.log("event value",event);
//     // console.log("event value length",pp);
//     // let userInputvalue = (<HTMLInputElement>document.getElementById("myId")).value; 
//     // let inputLegth=userInputvalue.length;
//     // console.log("length of input field is",inputLegth);
//     // if (inputLegth>6){
//     // return false
//     //     // event.preventDefault();
//     //     // event.
//     //     // alert("input is more than six no.");
//     // }

// }

}
