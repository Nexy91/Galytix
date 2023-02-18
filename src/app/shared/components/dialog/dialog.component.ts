import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent {
  // Inputs
  @Input() public set show(value: boolean) {
    this.showDialog = value;
  }

  @Input() close: boolean = true; // Close button
  @Input() title: string | undefined; // Header title

  @Input() width: string | undefined;
  @Input() minWidth: string | undefined;
  @Input() maxWidth: string | undefined;

  @Input() height: string | undefined;
  @Input() minHeight: string | undefined;
  @Input() maxHeight: string | undefined;

  // Outputs
  @Output() closed: EventEmitter<boolean> = new EventEmitter<boolean>();

  // Init
  public closeTrigger: boolean | undefined;
  public showDialog: boolean | undefined;

  //#region Methods

  public closeDialogStart(): void {
    this.closeTrigger = true;
    this.closeDialogEnd();
  }

  private closeDialogEnd(): void {
    this.closeTrigger = true;

    setTimeout(() => {
      this.closeTrigger = false;
      this.closed.emit(true);
      this.showDialog = false;
    }, 200);
  }

  //#endregion
}
