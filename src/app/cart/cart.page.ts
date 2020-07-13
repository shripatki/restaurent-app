import { SharedService } from './../shared/shared.service';
import { Item } from './../home/restaurants/menu/menu.model';
import { CartService } from './cart.service';
import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  cartItems: Item[];
  ifDineIn: boolean;
  totalCartValue: number;
  ifOrderPlaced: boolean;
  constructor(
    private cartService: CartService,
    private alrtCtrl: AlertController,
    private sharedService: SharedService,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    this.getCartItems();
    this.sharedService.getIfDineIn().subscribe((value) => {
      this.ifDineIn = value;
    });
    this.sharedService.getIfOrderPlaced().subscribe((value) => {
      this.ifOrderPlaced = value;
    });
  }
  ionViewWillEnter() {
    this.totalCartValue = this.cartService.totalCartValue;
  }
  getCartItems() {
    this.cartItems = this.cartService.orderedItem;
    this.totalCartValue = this.cartService.totalCartValue;
  }
  clearCart() {
    if (this.ifDineIn === false) {
      this.cartService.clearCart();
      this.getCartItems();
      this.sharedService.setTotalItemsInCart(0);
    }
  }
  // TODO
  removeItem(item: Item) {
    if (this.ifOrderPlaced === false) {
      let totalItem: any;
      this.cartService.removeItem(item);
      this.getCartItems();
      const currentQuantity = item.itemQuantity;
      this.sharedService.getTotalItemsInCart().subscribe((total) => {
        totalItem = total;
      });
      this.sharedService.setTotalItemsInCart(totalItem - currentQuantity);
    }
  }
  addQunatity(item: Item) {
    let totalItem: any;
    this.cartService.addToCart(item);
    this.getCartItems();
    this.sharedService.getTotalItemsInCart().subscribe((total) => {
      totalItem = total;
    });
    this.sharedService.setTotalItemsInCart(totalItem + 1);
    this.sharedService.setIfOrderPlaced(false);
  }
  removeQuantity(item: Item) {
    if (this.ifOrderPlaced === false) {
      let totalItem: any;
      this.cartService.removeQuantity(item);
      this.getCartItems();
      this.sharedService.getTotalItemsInCart().subscribe((total) => {
        totalItem = total;
      });
      this.sharedService.setTotalItemsInCart(totalItem - 1);
    }
  }
  placeOrder() {
    if (this.ifDineIn === false) {
      this.orderPlaced();
      this.clearCart();
      this.cartService.totalItem = 0;
    } else {
      this.sharedService.setIfOrderPlaced(true);
      this.orderPlaced();
    }
  }
  async orderPlaced() {
    const alert = await this.alrtCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Order Placed',
      subHeader: '',
      message: 'Your order has been placed.',
      buttons: ['OK'],
    });
    await alert.present();
  }

  orderMore() {
    this.navCtrl.back();
  }

  async orderDone() {
    const alert = await this.alrtCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Your payment was successful!',
      subHeader: '',
      message: 'Thank You for Visiting!',
      buttons: ['OK'],
    });
    await alert.present();

    this.cartService.clearCart();
    this.getCartItems();
    this.sharedService.setTotalItemsInCart(0);
  }
}
