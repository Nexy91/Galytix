import { WeatherState } from '@app/features/weather/store/weather.state';
import { IWeather } from './interfaces/weather.interface';
import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent {
  @Select(WeatherState.selectWeather) weather$: Observable<IWeather> | undefined;
}
