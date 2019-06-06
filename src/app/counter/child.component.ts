import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
    selector: 'app-child',
    template: `
        <button (click)="increase()">Increase</button>
        <button (click)="decrease()">Decrease</button>
        <button (click)="reset()">Reset</button>
    `
})

export class ChildComponent implements OnInit {

    constructor(private store: Store<number>) { }

    ngOnInit() { }

    increase() {
        this.store.dispatch({ type: 'INCREASE' });
    }
    decrease() {
        this.store.dispatch({ type: 'DECREASE' });
    }
    reset() {
        this.store.dispatch({ type: 'RESET' });
    }
}
