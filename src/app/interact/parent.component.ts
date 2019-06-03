import { Component } from '@angular/core';

@Component({
    selector: 'app-parent',
    template: `
        <h2>Parent</h2>
        <p>{{number}}</p>
        <app-children
        [valueFromParent]="number"
        (sendToParent)="getData($event)"
        ></app-children>

    `
})
export class ParentComponent {
    number = 1;
    getData(data: number) {
        this.number = data;
    }
}
