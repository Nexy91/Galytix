import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Columns, Config, DefaultConfig } from 'ngx-easy-table';
import { TitleCasePipe } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'smart-table',
  templateUrl: './smart-table.component.html',
  styleUrls: ['./smart-table.component.scss'],
})
export class SmartTableComponent implements OnInit {
  @Output() rowSelected: EventEmitter<any> = new EventEmitter<any>();
  @Input() columns: Columns[] = [];
  @Input() public set data(x: Observable<any> | any[] | null) {
    if (x instanceof Observable<any>) {
      x.subscribe((data: any[]) => {
        this.dataSource = data;
        this.setColumns();
      });
    } else if (x && x.length) {
      this.dataSource = x;
      this.setColumns();
    }
  }

  public configuration: Config | undefined;
  public dataSource: any[] = [];
  constructor(public _titleCasePipe: TitleCasePipe) {}

  public ngOnInit(): void {
    this.configuration = { ...DefaultConfig };
    this.configuration.searchEnabled = true;
    this.setColumns();
  }

  public selected(row: any): void {
    this.rowSelected.emit(row);
  }

  private setColumns(): void {
    if (this.dataSource && !this.columns.length) {
      const columns: any = Object.keys(this.dataSource[0]);
      columns.forEach((c: string) => {
        const column: Columns = {
          key: c,
          title: this._titleCasePipe.transform(c),
        };
        this.columns.push(column);
      });
      console.log(this.columns);
    }
  }
}
