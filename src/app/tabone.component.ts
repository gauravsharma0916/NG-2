import { Component } from '@angular/core';
import { ConfigService } from './myservicedata';
import { Router } from '@angular/router';// add file for navigate from one page to another page 
@Component({
selector: 'tab-one',
templateUrl: './tabone.component.html'
})
export class taboneComponent {
constructor(private configservice:ConfigService,private router:Router) {}
formData(data:any){
// alert("hello");
// console.log("data ki value"+ data);
this.configservice.set_service_data(data);
console.log("value of data which is set by me into service"+ data);

};
// for navigate from one url to another url
navigate(){
this.router.navigateByUrl('/tab_two');
}
}