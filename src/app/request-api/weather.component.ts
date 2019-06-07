
import {Component} from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-weather',
    // templateUrl: './products-filter.component.html',
    template: `
        <h2>Weather</h2>
    `,
    styleUrls: []
})
export class WeatherComponent {
    url = 'https://api.openweathermap.org/data/2.5/find?appid=01cc37655736835b0b75f2b395737694&q=Saigon';
    constructor(private http:HttpClient) {
        this.http.get(this.url)
        .toPromise()
        .then(result=>{
                console.log(result);
        }).catch(err=>console.log(err));
    }
}
