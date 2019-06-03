import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-children',
    template: `
        <h2>Children</h2>
        <p>{{valueFromParent}}</p>
        <button (click)="increase()">Increase</button>
        <button (click)="decrease()">Decrease</button>
        <button (click)="reset()">Reset</button>
    `
})
export class ChildrenComponent {
    @Input() valueFromParent: number;
    @Output() sendToParent = new EventEmitter();

    increase() {
        this.sendToParent.emit(this.valueFromParent + 1);
    }
    decrease() {
        this.sendToParent.emit(this.valueFromParent - 1);
    }
    reset() {
        this.sendToParent.emit(1);
    }
}
