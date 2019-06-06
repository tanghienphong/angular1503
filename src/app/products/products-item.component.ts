import { Component, Input } from '@angular/core';
import {Store} from '@ngrx/store';
import { Product } from '../products-list';

@Component({
    selector: 'app-products-item',
    templateUrl: './products-item.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsItemComponent {
    products: Array<Product>;
    

    constructor(private store: Store<Product[]>) {
        // get state default from productReducer
        // select('products'): là products trong StoreModule.forRoot ở file app.module.ts 
        this.store.select('products').subscribe(p => this.products = p);
    }

    removeProduct(id: number){
        // thay đổi state.
        this.store.dispatch({
            type: 'REMOVE_PRODUCT',
            idProduct: id
        })
    }

    setWishList(id: number){
        // thay đổi state.
        this.store.dispatch({
            type: 'TOGGLE_WISHLIST',
            idProduct: id
        })
    }
}

