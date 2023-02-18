import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Columns, Config, DefaultConfig } from 'ngx-easy-table';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'smart-table',
  templateUrl: './smart-table.component.html',
  styleUrls: ['./smart-table.component.scss'],
})
export class SmartTableComponent implements OnInit {
  @Input() data: any[] = [];
  @Input() columns: Columns[] = [];
  @Output() rowSelected: EventEmitter<any> = new EventEmitter<any>();

  public configuration: Config | undefined;

  constructor(public _titleCasePipe: TitleCasePipe) {}

  public ngOnInit(): void {
    this.configuration = { ...DefaultConfig };
    this.configuration.searchEnabled = true;

    if (!this.columns.length) {
      const columns: any = Object.keys(this.data[0]);
      columns.forEach((c: string) => {
        const column: Columns = {
          key: c,
          title: this._titleCasePipe.transform(c),
        };
        this.columns.push(column);
      });
    }
  }

  public selected(row: any): void {
    this.rowSelected.emit(row);
  }
}
