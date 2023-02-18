import { IGeoLocation } from '@app/shared/components/geo-location/interface/geo-location.interface';
import { WeatherState } from '@app/features/weather/store/weather.state';
import { ICountry } from '../countries/interfaces/country.interface';
import { CountriesState } from '../countries/store/countries.state';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { IWeather } from './interfaces/weather.interface';
import { Observable, Subject, takeUntil } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit, OnDestroy {
  @Select(CountriesState.selectedCountry) country$: Observable<ICountry> | undefined;
  @Select(WeatherState.selectWeather) weather$: Observable<IWeather> | undefined;

  public date: Date | undefined;
  public weather: IWeather | undefined;
  private destroy$: Subject<void> = new Subject();
  public geoLocation: IGeoLocation | undefined;
  public metricImperial: boolean = true;

  constructor(private _store: Store, private _router: Router) {}

  public ngOnInit(): void {
    this.date = new Date();

    this.weather$?.pipe(takeUntil(this.destroy$)).subscribe((x: IWeather) => {
      if (x?.coord) {
        this.weather = x;
        this.geoLocation = {
          Latitude: x.coord.lat,
          Longitude: x.coord.lon,
        };
      }
    });
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public changeLocation(): void {
    this._router.navigate(['countries']);
  }
}
