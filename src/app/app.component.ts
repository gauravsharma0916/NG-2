console.log("app.component.ts")  
import { Component } from '@angular/core';
// all component will be imported here only
 import {taboneComponent} from './tabone.component';
 import {tabtwoComponent} from './tabtwo.component';
 import {ajaxComponent} from './app.ajexcomponent';
 import {tabfiveComponent} from './tabfive.component';
 import {tabsixComponent} from './tabsix.component';
 import {tabsevenComponent} from './tabseven.Component';
 import {tabeightComponent} from './tabeight.component';
//  import { DatePickerOptions, DateModel } from 'ng2-datepicker'; // step 1
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
  
})

export class AppComponent  {
  
} 
