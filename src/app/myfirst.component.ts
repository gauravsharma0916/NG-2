import { Component } from '@angular/core';


@Component({
  selector: 'my-component',
  templateUrl: './myfirst.component.html',
  styleUrls:['./myfirst.component.css']
})
export class FirstComponent{
 public user={};
public cart = [];
//for push data in array 
  userData (value)
  {
  this.cart.push(value);
  console.log( this.cart);
   this.user={};     
} 
//for delete 
deletekaro (val){
  
  var index=this.cart.indexOf(val);
  this.cart.splice(index, 1);
}
// for edit row data
public showEditableRow=null; // here i have to give null value because without giving null value this chunk of code is not working fine.
public current={};
editkaro (val){
  this.showEditableRow=true;  
  this.current=val;
  
  alert("you want to edit");
}

savekaro(){
  this.showEditableRow=false;

}


}