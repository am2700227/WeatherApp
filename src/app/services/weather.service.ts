import { HttpClient,  HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../models/weather_model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  

  constructor(private http:HttpClient) { }

  getWeatherData(cityName:string): Observable<WeatherData>{
    return this.http.get<WeatherData>(environment.Url,{
       headers: new HttpHeaders()
      .set(environment.XRapidAPIHostHeaderName,environment.XRapidAPIHostHeaderVal)
      .set(environment.XRapidAPIKeyheaderName,environment.XRapidAPIKeyheaderVal),
      params: new HttpParams()
      .set('q',cityName)
      .set('units','metric')
      .set('mode','json')
    })
  }
}
