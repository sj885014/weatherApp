import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from '../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherserviceService {

  constructor(private http:HttpClient) { }

  getColumbusCurrentWeather():Observable<any>{
    return this.http.get<any>('http://api.openweathermap.org/data/2.5/weather?q=columbus&appid=4275d5a5a8ebc4ac24e320798bfbe382&units=imperial');
  }
  getColumbusTomorrowWeather():Observable<any>{
    return this.http.get<any>('http://api.openweathermap.org/data/2.5/forecast?q=columbus,us&APPID=4275d5a5a8ebc4ac24e320798bfbe382&units=imperial');
  }
}
