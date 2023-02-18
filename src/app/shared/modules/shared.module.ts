import { GeoLocationComponent } from '@shared/components/geo-location/geo-location.component';
import { SmartTableComponent } from '../components/smart-table/smart-table.component';
import { DialogComponent } from '../components/dialog/dialog.component';
import { MultiSwitchCasePipe } from '../pipes/multi-switch-case.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { SafeURLPipe } from '@shared/pipes/safe-url.pipe';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from './material.module';
import { MetricPipe } from '../pipes/metric.pipe';
import { TableModule } from 'ngx-easy-table';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    // Components
    SmartTableComponent,
    GeoLocationComponent,
    DialogComponent,

    // Pipes
    MultiSwitchCasePipe,
    SafeURLPipe,
    MetricPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    TableModule,
    MatSnackBarModule,
    TranslateModule,
  ],
  exports: [
    // Components
    SmartTableComponent,
    GeoLocationComponent,
    DialogComponent,

    // Modules
    CommonModule,
    MaterialModule,
    TranslateModule,

    // Pipes
    MultiSwitchCasePipe,
    SafeURLPipe,
    TitleCasePipe,
    MetricPipe,
  ],
})
export class SharedModule {}
