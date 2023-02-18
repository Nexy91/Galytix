import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [],
  imports: [
    TranslateModule,
    MatFormFieldModule,
    MatSelectModule,
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTabsModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatRadioModule,
    MatProgressBarModule,
    MatCheckboxModule,
    MatTooltipModule,
  ],
  exports: [
    MatFormFieldModule,
    MatSelectModule,
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTabsModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatRadioModule,
    MatProgressBarModule,
    MatCheckboxModule,
    MatTooltipModule,
  ],
})
export class MaterialModule {}
