import { ICountry } from '@app/features/countries/interfaces/country.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CountriesApiService {
  constructor(private http: HttpClient) {}

  private readonly countriesEndpoint: string = 'https://countriesnow.space/api/v0.1/countries';

  public getCountries(): Observable<ICountry[]> {
    return this.http.get<ICountry[]>(this.countriesEndpoint);
  }
}
