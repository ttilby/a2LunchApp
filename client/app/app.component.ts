import {Component, OnInit} from 'angular2/core';
import { RestaurantComponent } from './restaurant/restaurant.component';


@Component({
    selector: 'lunch-app',
    template: `
        <h1>Lunch App</h1>
        <div>
            <restaurant></restaurant>
        </div>
    `,
    directives: [RestaurantComponent],
    providers: []
})
export class AppComponent implements OnInit{
    
    
    ngOnInit(){
        
    }
}