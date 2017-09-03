import { Component,EventEmitter } from '@angular/core';
import { ConfigService } from './myservicedata';
import { Router } from '@angular/router';// add file for navigate from one page to another page 
@Component({
selector: 'tab-seven',
templateUrl: './tabseven.component.html'
})
export class tabsevenComponent {
    OnInitEvent: EventEmitter<string> = new EventEmitter();
constructor(private configservice:ConfigService,private router:Router) {}

ngOnInit (){
this.myCustomMethod({name:'gaurav'});
}

ngOnDestroy() {
    alert ("hello ondestroy");
}

myCustomMethod(data){
    alert("this method is written in myCustomMethod and called in ngoninit"+ data.name);
}

}