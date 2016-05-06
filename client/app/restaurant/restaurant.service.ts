import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import 'rxjs/add/operator/map';
import { Restaurant } from './restaurant.model.ts';


@Injectable()
export class RestaurantService {

    restaurants: Restaurant[];

    constructor(private http: Http) {
        this.restaurants = [];
    }
    
    getRestaurants(){
        return this.http.get('./app/restaurant/restaurants.json')
        .map((res: Response) => res.json());
    }
    
    addRestaurant(item: Restaurant){
        if(item){
            this.restaurants.push(item);
        }
    }

}