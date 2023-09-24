import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  @Input() HeadArray: any[] = [];
  @Input() GridArray: any[] = [];
  @Input() isAction: boolean = false;
  @Output() onEdit = new EventEmitter<any>();
  @Output() onDelete = new EventEmitter<any>();
  constructor() {}
  ngOnInit() {}

  edit(item: any) {
    this.onEdit.emit(item);
  }
  delete(item: any) {
    this.onDelete.emit(item);
  }
}
