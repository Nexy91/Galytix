import { Component, Input, OnInit } from '@angular/core';
import { Columns, Config, DefaultConfig } from 'ngx-easy-table';

@Component({
  selector: 'smart-table',
  templateUrl: './smart-table.component.html',
  styleUrls: ['./smart-table.component.scss'],
})
export class SmartTableComponent implements OnInit {
  @Input() data: any[] = [];

  public columns: Columns[] = [];
  public configuration: Config | undefined;

  public ngOnInit(): void {
    this.configuration = { ...DefaultConfig };
    this.configuration.searchEnabled = true;
  }

  public rowSelected(row: any): void {}
}
