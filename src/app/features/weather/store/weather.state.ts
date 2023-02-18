import { WeatherApiService } from '@app/features/weather/services/weather-api.service';
import { IWeather } from '@app/features/weather/interfaces/weather.interface';
import { State, Selector, Action, StateContext } from '@ngxs/store';
import { GetWeather } from './weather.actions';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

export class WeatherStateModel {
  weather: IWeather | undefined;
}
@State<WeatherStateModel>({
  name: 'weatherState',
  defaults: {
    weather: {} as IWeather,
  },
})
@Injectable()
export class WeatherState {
  constructor(private _api: WeatherApiService) {}

  @Selector()
  public static selectWeather(state: WeatherStateModel): IWeather | undefined {
    return state.weather;
  }

  @Action(GetWeather)
  public getWeather(ctx: StateContext<WeatherStateModel>, { country }: GetWeather): void {
    this._api
      .getWeather(country)
      .pipe(
        tap((res: any) => {
          if (res) {
            ctx.patchState({ weather: res });
          }
        }),
      )
      .subscribe();
  }
}
