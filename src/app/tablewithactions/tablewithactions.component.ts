import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-tablewithactions',
  templateUrl: './tablewithactions.component.html',
  styleUrls: ['./tablewithactions.component.css']
})
export class TablewithactionsComponent implements OnInit {
  @Input() data = [];
  @Input() tableHeaders = [];
  @Output() onEdit = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }
  getKeys() {
    let firstData = this.data[0];
    return Object.keys(firstData);
  }
  edit(id) {
    this.onEdit.emit(id)
  }
}
