import { SharedService } from './../../../shared/shared.service';
import { CartService } from './../../../cart/cart.service';
import { MenuService } from './menu.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Menu, Item } from './menu.model';
import { Restaurant } from '../restaurant.model';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  menu: Menu;
  ifDineIn: boolean;
  currentRestaurant: Restaurant;
  buttonColor;
  constructor(
    private activatedRoute: ActivatedRoute,
    private menuService: MenuService,
    private restaurantService: RestaurantService,
    private router: Router,
    private cartService: CartService,
    private sharedService: SharedService
  ) {}

  ngOnInit() {
    this.sharedService.getIfDineIn().subscribe((value) => {
      this.ifDineIn = value;
    });
    this.activatedRoute.paramMap.subscribe((param) => {
      if (!param.has('restaurantId')) {
        this.router.navigateByUrl('./restaurants');
        return;
      }
      this.menu = this.menuService.getMenuById(param.get('restaurantId'));
      this.currentRestaurant = this.restaurantService.getRestaurant(
        param.get('restaurantId')
      );
    });
  }

  addToCart(item: Item) {
    let totalItem: any;
    this.cartService.addToCart(item);
    this.sharedService.getTotalItemsInCart().subscribe((total) => {
      totalItem = total;
    });
    this.sharedService.setTotalItemsInCart(totalItem + 1);
    this.sharedService.setIfOrderPlaced(false);
  }
  onItemClick() {}
}
