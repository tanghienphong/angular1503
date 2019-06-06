import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-counter',
  // templateUrl: './counter.component.html',
  template: `
    <h2>{{ myCount }}</h2>
    <app-child></app-child>
  `,
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  myCount: number;
  constructor(private store: Store<number>) {
    // get data from store
    // this.myCount = this.store.pipe(select('counter'));

    this.store.select('counter').subscribe(c => this.myCount = c);
  }

  ngOnInit() {
  }

}
