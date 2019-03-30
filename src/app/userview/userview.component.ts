import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userview',
  templateUrl: './userview.component.html',
  styleUrls: ['./userview.component.css']
})
export class UserviewComponent {
  id: number;
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    })

  }
}