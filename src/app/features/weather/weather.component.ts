import { WeatherState } from '@app/features/weather/store/weather.state';
import { IWeather } from './interfaces/weather.interface';
import { Select, Store } from '@ngxs/store';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent {
  @Select(WeatherState.selectWeather) weather$: Observable<IWeather> | undefined;

  constructor(private _store: Store, private _router: Router) {}

  public changeLocation(): void {
    this._router.navigate(['countries']);
  }
}
