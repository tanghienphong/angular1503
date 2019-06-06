import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Product } from '../products-list';

@Component({
    selector: 'app-products-form',
    templateUrl: './products-form.component.html',
    styleUrls: []
})
export class ProductsFormComponent implements OnInit {
    productForm: FormGroup;
    isShowForm: boolean;
    constructor(private fb: FormBuilder, private store: Store<boolean>) {
        this.store.select('toggleForm').subscribe(f => this.isShowForm = f);
    }
    ngOnInit(): void {
        this.productForm = this.fb.group({
            name: ['', [
                Validators.required,
                Validators.minLength(6)
            ]],
            price: ['0', [
                Validators.required,
                Validators.pattern('^[0-9]+$')
            ]],
        });
    }

    toggleForm(){
        this.store.dispatch({
            type: 'TOGGLE_FORM',
            status: !this.isShowForm,
        });
    }

    addProduct(){
        const { name, price } = this.productForm.value;
        const id = Date.now().toString();
        const product: Product = { id, name, price };
        this.store.dispatch({
            type: 'ADD_PRODUCT',
            product // product: product
        });
        this.toggleForm();
        this.productForm.setValue({
            name: '',
            price: 0
        });
    }
}
