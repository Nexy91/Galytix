import { SharedModule } from '../../shared/modules/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [HomeComponent],
  imports: [HomeRoutingModule, SharedModule],
  providers: [],
})
export class HomeModule {}
