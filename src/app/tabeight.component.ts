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
            pincode:[null,Validators.pattern('^[1-9][0-9]{4}$')]


        })
        

        
    })
    

}
onSubmit(data){
    console.log("form fields values are", this.myCustomForm.value);
}

}