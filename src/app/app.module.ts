import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from 'src/environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { TitleCasePipe } from '@angular/common';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';

// NGXS
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsModule } from '@ngxs/store';
import { CountriesState } from './shared/store/countries/countries.state';
import { HttpClientModule } from '@angular/common/http';
import { WeatherState } from './shared/store/weather/weather.state';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsModule.forRoot([CountriesState, WeatherState]),
    NgxsLoggerPluginModule.forRoot({
      disabled: !environment.ngsxLogging,
    }),
  ],
  bootstrap: [AppComponent],
  providers: [TitleCasePipe],
})
export class AppModule {}
