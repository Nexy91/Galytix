import { CountriesComponent } from '../countries/countries.component';
import { SharedModule } from '../../shared/modules/shared.module';
import { CountriesRoutingModule } from './countries-routing.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [CountriesComponent],
  imports: [CountriesRoutingModule, SharedModule],
  providers: [],
})
export class CountriesModule {}
