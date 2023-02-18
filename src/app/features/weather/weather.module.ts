import { SharedModule } from '../../shared/modules/shared.module';
import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherComponent } from './weather.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [WeatherComponent],
  imports: [WeatherRoutingModule, SharedModule],
  providers: [],
})
export class WeatherModule {}
