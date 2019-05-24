import { Component } from '@angular/core';

@Component({
    selector: 'app-user',
    // templateUrl: './user.component.html'
    template: `
        <h3>User Component</h3>
        <!-- data binding -->
        <p>{{ name }}</p>

        <!-- style binding -->
        <p [style.color]="1==2 ? redColor : blueColor" >Your name</p>

        <p [ngStyle]="myStyle">Teo</p>
        <p [ngClass]="newClass">ngClass</p>

        <!-- property binding -->
        <p [id]="myId">Your name</p>
        <p [class]="myClass">Your name</p>
        <input [disabled]='isDisabled' #myInput value="KPT" placeholder="Enter your name">

        <!-- Event Binding --->
        <button (click)="onClickButton(myInput)">Click Me!</button>
        <p>{{myInput.value}}</p>
        <p>{{dataInput}}</p>

        <input #myInput02 (keyup)='getDataInput(myInput02.value)' placeholder="Enter your name">
        <p>{{myInput02.value}}</p>
        <!-- Trong event KeyUp, khi thay đổi giá trị thì tự động biến myInput02 sẽ tự hiện, không cần thông qua hàm getDataInput -->
        
        <hr/>
        <!-- 2 way Binding, Phải Import FormModule trong app.module.ts --->
        <input [(ngModel)]="myInput03" placeholder="Enter your name">
        <p>{{myInput03}}</p>

    `
    ,
    styles: [
        `
        #your-name {
            color: green;
            font-family: Tahoma
        }
        .text-danger{
            color: red
        }
        .text-bold{
            font-weight: bold
        }
        `
    ]
})
export class UserComponent {
    name = 'Teo';
    redColor = 'red';
    blueColor = 'blue';
    myId = 'your-name';
    myClass = 'text-danger text-bold';
    isDisabled = false;
    myStyle = {
        color: 'red',
        'text-transform': 'uppercase',
        fontSize: '30px'
    };
    newClass = {
        'text-danger': true,
        'text-bold': true
    };

    constructor() {
    }

    dataInput: String;

    onClickButton(data: any){
        console.log(data)
        console.log(data.value)
        this.dataInput = data.value
    }

    getDataInput(data:string){
        console.log(data)
    }
}
