import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class WeatherApiService {
  constructor(private http: HttpClient) {}

  private readonly apiKey: string = '794ee95e63c5a32aaf88cd813fa2e425';
  private readonly baseURL: string = 'https://api.openweathermap.org/';

  public getWeather(countryName: string): Observable<any> {
    return this.http.get<any>(`${this.baseURL}data/2.5/weather?q=${countryName}&APPID=${this.apiKey}`);
  }
}
