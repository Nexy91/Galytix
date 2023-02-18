import { CountriesState } from '@app/shared/store/countries.state';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ICountry } from './interfaces/country.interface';
import { Observable, Subject, takeUntil } from 'rxjs';
import { Columns } from 'ngx-easy-table';
import { Select } from '@ngxs/store';

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

  public ngOnInit(): void {
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
}
