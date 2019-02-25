import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherserviceService {

  constructor(private http: HttpClient) { 
  }
  httpOptions = {
    headers: new HttpHeaders({ 
      'Access-Control-Allow-Origin':'*',
      'Authorization':'authkey',
      'userid':'1'
    })
  };


 baseurl = 'https://www.metaweather.com/api/location/search/?query=columbus';

 getLocation():Observable<string>{
   return this.http.get<string>(this.baseurl);
 }
}
