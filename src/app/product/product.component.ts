import { Component, OnInit } from '@angular/core';
import { Product, listProduct } from '../products-list';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[] = listProduct;
  isShowForm = false;
  filterMode = 'SHOW_ALL';

  constructor() { }
  ngOnInit() {
  }

  receiveToggleForm(mode: boolean): boolean {
    return this.isShowForm = mode;
  }

 
  getFilterMode(data: string) {
    return this.filterMode = data;
  }
}
