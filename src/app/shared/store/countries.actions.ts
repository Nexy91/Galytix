import { ICountry } from '@app/features/countries/interfaces/country.interface';

export class GetCountries {
  public static readonly type: string = '[GetCountries] Getting all available countries';
}

export class SelectCountry {
  public static readonly type: string = '[SelectCountry] Country selected';
  constructor(public country: ICountry) {}
}
