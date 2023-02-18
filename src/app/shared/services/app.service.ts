import { TranslateService } from '@ngx-translate/core';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AppService {
  constructor(private _translate: TranslateService) {}
}
