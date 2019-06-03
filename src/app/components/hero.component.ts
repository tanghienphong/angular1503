import { Component } from '@angular/core';

@Component({
    selector: 'app-hero',
    template: `
        <h2>Hero Component</h2>
        <h3>List of Hero</h3>

        <ul>
            <li *ngFor="let hero of listHero; index as i">
                {{i+1}} - ID: {{hero.id}} - Name: {{hero.name }}
            </li>
        </ul>

    `,
})
export class HeroComponent {
    listHero: Hero[] = [
        { id: 11, name: 'Nguyen Trai' },
        { id: 22, name: 'Nguyen Hue' },
        { id: 33, name: 'Nguyen Kiem' }
    ];
}

class Hero {
    public id: number;
    public name: string;
}
