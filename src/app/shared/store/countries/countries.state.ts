import { CountriesApiService } from '@app/features/countries/services/country-api.service';
import { ICountry } from '../../../features/countries/interfaces/country.interface';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { GetCountries, SelectCountry } from './countries.actions';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

export class CountriesStateModel {
  countries: ICountry[] | undefined;
  selectedCountry: ICountry | undefined;
}
@State<CountriesStateModel>({
  name: 'countriesState',
  defaults: {
    countries: {} as ICountry[],
    selectedCountry: {} as ICountry,
  },
})
@Injectable()
export class CountriesState {
  constructor(private _api: CountriesApiService) {}

  @Selector()
  public static selectCountries(state: CountriesStateModel): ICountry[] | undefined {
    return state.countries;
  }

  @Selector()
  public static selectedCountry(state: CountriesStateModel): ICountry | undefined {
    return state.selectedCountry;
  }

  @Action(GetCountries)
  public getCountries(ctx: StateContext<CountriesStateModel>): void {
    this._api
      .getCountries()
      .pipe(
        tap((res: any) => {
          if (res.data.length) {
            ctx.patchState({ countries: res.data });
          }
        }),
      )
      .subscribe();
  }

  @Action(SelectCountry)
  public uploadId(ctx: StateContext<CountriesStateModel>, { country }: SelectCountry): void {
    ctx.patchState({ selectedCountry: country });
  }
}
