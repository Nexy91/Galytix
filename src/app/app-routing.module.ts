import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadChildren: () => import('./features/home/home.module').then((m: any) => m.HomeModule),
  },
  {
    path: 'countries',
    loadChildren: () => import('./features/countries/countries.module').then((m: any) => m.CountriesModule),
  },
  {
    path: 'weather',
    loadChildren: () => import('./features/weather/weather.module').then((m: any) => m.WeatherModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
