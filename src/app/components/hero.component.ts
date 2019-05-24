import {Component} from '@angular/core';
@Component({
    selector: 'app-hero',
    template: `
        <h2>Hero Component</h2>
        <h3> Danh sách Hero </h3>

        <ul>
            <li *ngFor="let hero of listHero; index as i">{{i+1}} - {{hero.id}} - {{hero.name}}</li>
        </ul>
    `,

})

export class HeroComponent {
    listHero: Hero[] = [
        {id:11, name: 'Nguyen Trai'},
        {id:22, name: 'Nguyen Hue'},
        {id:33, name: 'Nguyen Kiem'},
    ]
}

class Hero{
    id: number;
    name:string;
}