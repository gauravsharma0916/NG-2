import {Injectable} from '@angular/core';
import {Http,Response} from "@angular/http";
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';





@Injectable()
export class ConfigService {
private _url:string="../mockData.json";
public serviceData:any=[];
public get_service_data():any{
return  this.serviceData;
                             };
public set_service_data(value:any):void{
this.serviceData=value;
                                       };




constructor(private http:Http) {}
// Uses http.get() to load a single JSON file  
getFriendsData():Observable<any> {
return this.http.get(this._url).map(
(response:Response) =>  response.json()

                                   );
                                   
                     }
                     
                           };