import { GetCountries } from '@app/shared/store/countries/countries.actions';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private _store: Store) {}

  public ngOnInit(): void {
    this._store.dispatch(new GetCountries());
  }

  public ngOnDestroy(): void {}
}
