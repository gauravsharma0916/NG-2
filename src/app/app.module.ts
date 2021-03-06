console.log("app.module.ts");  
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule   } from '@angular/forms'; //add ReactiveFormsModule for use to form builder
import { HttpModule } from '@angular/http';
 import { ConfigService } from './myservicedata';
//import for router module
import {RouterModule} from '@angular/router';
// import root componenet here 
import { AppComponent } from './app.component';
//import component which is use for routing 
import { taboneComponent } from './tabone.component';
import { tabtwoComponent } from './tabtwo.component';



import { FirstComponent } from './myfirst.component';
// import ajax component here only 
import { ajaxComponent } from './app.ajexcomponent';
// import tab five component here 
import { tabfiveComponent } from './tabfive.Component';
// import tab six component here 
import { tabsixComponent } from './tabsix.Component';

//import seventh componenet here 
import { tabsevenComponent } from './tabseven.Component';

//import eighth componenet here 
import { tabeightComponent } from './tabeight.component';
// import date picker 
import { DatePickerModule } from 'ng2-datepicker';
//import image uploader
import { ImageUploadModule } from 'angular2-image-upload';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    taboneComponent,
    tabtwoComponent,
    ajaxComponent,
    tabfiveComponent,
    tabsixComponent,
    tabsevenComponent,
    tabeightComponent      
  ],
  imports: [
    BrowserModule,
    DatePickerModule ,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path:'tab_one', component:taboneComponent},
      {path:'tab_two', component:tabtwoComponent},
      {path:'my-component', component:FirstComponent},
      {path:'ajax-call', component:ajaxComponent},
      {path:'tab-five', component:tabfiveComponent},
      {path:'tab-six', component:tabsixComponent},
      {path:'tab-seven', component:tabsevenComponent},
      {path:'tab-eight', component:tabeightComponent}
    ]),
    ImageUploadModule.forRoot(),
    FormsModule,
    HttpModule
  ],
   providers:[ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule {}
