import { Component, OnInit, Input } from '@angular/core';
import * as formatNumber from 'simple-format-number';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {
  @Input() amount: number = 0;
  @Input() stock = "";
  @Input() color = "Black";
  constructor() { }

  ngOnInit() {
  }
  getStyle() {
    return {
      'font-size': '60px',
      'color': this.color
    }
  }

  getAmount() {
    return formatNumber(this.amount);
  }
}
