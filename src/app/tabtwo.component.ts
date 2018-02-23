  console.log("tabtwocomponent.ts");
import { Component ,OnInit} from '@angular/core';
 import { ConfigService } from './myservicedata';
 import 'rxjs/Rx'; // add this file for use the map feature.
 //  import file for datepicker 
 import { DatePickerOptions, DateModel } from 'ng2-datepicker';
 


@Component({
  selector: 'tab-two',
  templateUrl: './tabtwo.component.html'
  // providers:[ConfigService]
  
})
  
export class tabtwoComponent {

  public getterSetter:any=[];
  public firstdrpdwn;
  public seconddrpdwn;
  public thirddrpdwn;
  public fourthdrpdwn;
  public default:boolean=true;
  public one:any=true;
  public two:any=true;
  public three:any=true;
  
  // public  store_service_data:any=[];
  // for adding datepicker support file start here 
   date: DateModel;
  options: DatePickerOptions;
// for adding datepicker support file end here 
   constructor(private configservice:ConfigService) {}
      ngOnInit(){
        this.configservice.get_service_data();
        this.options = new DatePickerOptions();
        
       this.firstdrpdwn=true;
       this.seconddrpdwn=true;
       this.thirddrpdwn=true;
       this.fourthdrpdwn=true;
      }        
              
showdata(){
  console.log( this.configservice.get_service_data());
  

}

// all functionality start for diable dropdown using radio button

firstRadioBtn(eve){
  console.log("your $event is ", eve);
       this.firstdrpdwn=false;
       this.seconddrpdwn=true;
       this.thirddrpdwn=true;

}

secondRadioBtn(eve){
  console.log("your $event is ", eve);
       this.firstdrpdwn=true;
       this.seconddrpdwn=false;
       this.thirddrpdwn=true;

}

thirdRadioBtn(eve){
  console.log("your $event is ", eve);
       this.firstdrpdwn=true;
       this.seconddrpdwn=true;
       this.thirddrpdwn=false;

}

// test your code here properly 
 person_one={
   name:"gaurav sharma",
   age:27,
   mob:9889440531,
   role:"developer",
   exp:3,
   company:"hcl technologies"
}

 person_two={
   name:"Amit singh",
   age:29,
   mob:9936124385,
   role:"seniour developer",
   exp:5
}

 person_three={
   name:"Rishi kant prasad",
   age:30,
   mob:8090037578,
   role:"seniour test lead",
   exp:6
}

person_four={
   name:"Mahendra pal",
   age:28,
   mob:1234567890,
   role:"Angular developer",
   exp:6
}


person={
  first_person:this.person_one,
  second_person:this.person_two,
  third_person:this.person_three,
  fourth_person:this.person_four

}

demo(){
  console.log("its value of family", this.person.first_person);
  console.log("its value of family", this.person.second_person);
  console.log("its value of family", this.person.third_person);
  console.log("its value of family", this.person.fourth_person);
  
}

// checkbox functionality test here
 allCheckBox(){  
  var element = <HTMLInputElement> document.getElementById("is3dCheckBox");
  var isChecked = element.checked;
  if (isChecked){
    alert("checked hai !!!!!");
    this.one=true;
    this.two=true;
    this.three=true;
  }

  if (!isChecked){
    alert("checked nahi hai !!!!!");
    this.one=false;
    this.two=false;
    this.three=false;
  }

   
   
   
}
oneCheckBox(){
  this.one=!this.one;
  if(this.one==false ||this.two==false || this.three==false){
    this.default=false;
  } 

  if(this.one==true && this.two==true && this.three==true){
    this.default=true;
  } 
}

twoCheckBox(){
  this.two=!this.two;
  if(this.one==false ||this.two==false || this.three==false){
    this.default=false;
  }

  if(this.one==true && this.two==true && this.three==true){
    this.default=true;
  } 
}

threeCheckBox(){
  this.three=!this.three;
  if(this.one==false ||this.two==false || this.three==false){
    this.default=false;
  }

  if(this.one==true && this.two==true && this.three==true){
    this.default=true;
  } 
}


};