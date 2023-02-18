import { ICountry } from '../../features/countries/interfaces/country.interface';
import { CountriesApiService } from '@app/features/countries/services/api.service';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { GetCountries } from './countries.actions';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

export class CountriesStateModel {
  countries: ICountry | null = {} as ICountry;
}
@State<CountriesStateModel>({
  name: 'countriesState',
  defaults: {
    countries: {} as ICountry,
  },
})
@Injectable()
export class CountriesState {
  constructor(private _api: CountriesApiService) {}

  @Selector()
  public static selectCountries(state: CountriesStateModel): ICountry | null {
    return state.countries;
  }

  @Action(GetCountries)
  public getCountries(ctx: StateContext<CountriesStateModel>): void {
    this._api
      .getCountries()
      .pipe(
        tap((res: any) => {
          if (res.data.length) {
            ctx.patchState({
              countries: res.data,
            });
          }
        }),
      )
      .subscribe();
  }
}
