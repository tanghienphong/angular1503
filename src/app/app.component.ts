import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `
  //   <h2>App Component</h2>
  //   <!-- <app-hero></app-hero> -->
  //   <app-signup></app-signup>
  // `,
  // styleUrls: ['./app.component.css']
  styles: [
    `
    p{
      font-size: 20px;
      color: red;
    }
    `
  ]
})
export class AppComponent {
  title = 'ng1503';
}
