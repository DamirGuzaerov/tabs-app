import {Component, Input, OnInit} from '@angular/core';
import {IDataTable} from "../../types/types";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  isObject(val: any): boolean {
    return typeof val === 'object';
  }

  @Input() public tableConfig: IDataTable = {columns: []};

  @Input() public tableRows: any[] = [];
}
