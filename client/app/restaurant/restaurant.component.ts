import { Component, OnInit } from 'angular2/core';
import { Restaurant } from './restaurant.model';
import { RestaurantService } from './restaurant.service';

@Component({
    //moduleId: module.id,
    selector: 'restaurant',
    template: `
        <div>
            <input [(ngModel)]="newRestaurant" (keyup.enter)="addRestaurant(newRestaurant)" /> 
            <br />
            {{ newRestaurant }}
            <br />
            <pre>       
                {{ restaurants | json }}
            </pre>
        </div>
    `,
    providers: [RestaurantService]
})
export class RestaurantComponent implements OnInit {
    
    restaurants:Restaurant[];
    newRestaurant: string;
    
    constructor(private restaurantService:RestaurantService) { }

    ngOnInit() {
        this.getRestaurants();
     }

    addRestaurant(name: string){
        if(name){
            var restaurant = new Restaurant(name);
            this.restaurantService.addRestaurant(restaurant);
            this.getRestaurants();
            this.clearInputs();
        }
    }
    
    getRestaurants(){
        this.restaurantService.getRestaurants()
        .subscribe(r => this.restaurants = r);
    }
    
    clearInputs(){
        this.newRestaurant = '';
    }

}