import { SharedService } from './../../shared/shared.service';
import { RestaurantService } from './restaurant.service';
import { Component, OnInit } from '@angular/core';
import { Restaurant } from './restaurant.model';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.page.html',
  styleUrls: ['./restaurants.page.scss'],
})
export class RestaurantsPage implements OnInit {
  restaurants: Restaurant[];
  slideOpts = {
    initialSlide: 0,
    speed: 600,
    slidesPerView: 1,
    autoplay: true,
  };
  constructor(
    private restaurantService: RestaurantService,
    private sharedService: SharedService
  ) {}

  ngOnInit() {
    this.getRestaurants();
    // this.sharedService.setIfDineIn(false);
  }
  ionViewDidEnter() {
    this.sharedService.setIfDineIn(false);
  }
  getRestaurants() {
    this.restaurants = this.restaurantService.getAllRestaurants();
  }
}
