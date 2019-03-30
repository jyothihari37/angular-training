import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { SELECT_VALUE_ACCESSOR } from '@angular/forms/src/directives/select_control_value_accessor';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit, OnChanges {
  @Input() success;
  @Input() message;
  constructor() { }
  ngOnChanges(changes) {
    console.log(changes);
  }
  ngOnInit() {
    console.log("Initalize", this.success);
  }
  isValid() {
    return this.success;
  }
  isDefined() {
    return this.success !== undefined
  }
}
