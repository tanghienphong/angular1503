import { Component, OnInit } from '@angular/core';
import {Store, select} from '@ngrx/store';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  myCount: number;
  constructor(private store: Store<number>) { 
    this.myCount = this.store.pipe(select('counter'));
  }

  ngOnInit() {
  }

}
