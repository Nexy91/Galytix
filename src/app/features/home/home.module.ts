import { CountriesComponent } from '../countries/countries.component';
import { SharedModule } from '../../shared/modules/shared.module';
import { WeatherComponent } from '../weather/weather.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [HomeComponent, CountriesComponent, WeatherComponent],
  imports: [HomeRoutingModule, SharedModule],
  providers: [],
})
export class HomeModule {}
