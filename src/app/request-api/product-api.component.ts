
import {Component} from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-product-api',
    // templateUrl: './products-filter.component.html',
    template: `
        <h2>Product Api</h2>
    `,
    styleUrls: []
})
export class ProductApiComponent {
    url = 'https://localhost:3000';
    constructor(private http:HttpClient) {
        this.http.get(this.url)
        .toPromise()
        .then(result=>{
                console.log(result);
        }).catch(err=>console.log(err.message));
    }
}
