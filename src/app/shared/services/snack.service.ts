import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';
import { Injectable } from '@angular/core';

// https://www.npmjs.com/package/ngx-toastr
@Injectable({ providedIn: 'root' })
export class SnackService {
  constructor(private _snackBar: MatSnackBar, private _translate: TranslateService) {}

  public info(message: string): void {
    this.openSnack(message, 'info');
  }

  public success(message: string): void {
    this.openSnack(message, 'success');
  }

  public warning(message: string): void {
    this.openSnack(message, 'warning');
  }

  public error(message: string): void {
    this.openSnack(message, 'error');
  }

  private openSnack(message: string, classSuffix: 'info' | 'success' | 'warning' | 'error'): void {
    let duration: number = message.length * 0.1 * 1000;
    duration = duration < 3000 ? 3000 : duration > 10000 ? 10000 : duration;

    this._snackBar.open(message ? this._translate.instant(message) : message, undefined, {
      panelClass: [`snack-${classSuffix}`],
      verticalPosition: 'bottom',
      horizontalPosition: 'center',
      duration: duration,
    });
  }
}
