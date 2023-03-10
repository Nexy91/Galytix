import { GetCountries, SelectCountry } from '@app/features/countries/store/countries.actions';
import { CountriesState } from '@app/features/countries/store/countries.state';
import { GetWeather } from '@app/features/weather/store/weather.actions';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ICountry } from './interfaces/country.interface';
import { Observable, Subject, takeUntil } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import { Columns } from 'ngx-easy-table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
})
export class CountriesComponent implements OnInit, OnDestroy {
  @Select(CountriesState.selectCountries) countries$: Observable<ICountry[]> | undefined;

  private destroy$: Subject<void> = new Subject();
  public countriesDB: ICountry[] = [];
  public columns: Columns[] = [];

  constructor(private _store: Store, private _router: Router) {}

  public ngOnInit(): void {
    this._store.dispatch(new GetCountries());

    // This is just example to show subscription on selector. Observable can be pass true .html with async pipe as well.
    this.countries$?.pipe(takeUntil(this.destroy$)).subscribe((x: ICountry[]) => {
      this.countriesDB = x;
    });

    this.columns = [
      {
        key: 'country',
        title: 'Country',
      },
      {
        key: 'iso2',
        title: 'ISO2',
      },
      {
        key: 'iso3',
        title: 'ISO3',
      },
    ];
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public rowSelected(country: ICountry): void {
    this._store.dispatch(new SelectCountry(country));
    this._store.dispatch(new GetWeather(country.country));
    this._router.navigate(['weather']);
  }
}
