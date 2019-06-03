import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
    selector: 'app-filter-product',
    templateUrl: './filter-product.component.html'
})
export class FilterProductComponent {

    @Input() inputFilterMode: string;
    @Output() filterMode = new EventEmitter();

    changeFilterMode(input: string) {
        this.filterMode.emit(input);
    }
}
