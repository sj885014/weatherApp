import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { WeatherserviceService } from 'src/app/weatherservice.service';

@Component({
  selector: 'app-displaycomp',
  templateUrl: './displaycomp.component.html',
  styleUrls: ['./displaycomp.component.css']
})
export class DisplaycompComponent implements OnInit {

  constructor(private service: WeatherserviceService) { }
  temp;
  temp_min;
  temp_max;

  tom_temp;
  tom_temp_min;
  tom_temp_max;

  result:string;
  ngOnInit() {
    
    this.service.getColumbusCurrentWeather().subscribe( (result) => {
      this.temp = result.main.temp;
      this.temp_min = result.main.temp_min;
      this.temp_max = result.main.temp_max;
    } );


    this.service.getColumbusTomorrowWeather().subscribe( (result) => {
      this.tom_temp = result.list[0].main.temp;
      this.tom_temp_min = result.list[0].main.temp_min;
      this.tom_temp_max = result.list[0].main.temp_max;
    } );


  }

}
