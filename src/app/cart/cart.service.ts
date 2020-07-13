import { Item } from './../home/restaurants/menu/menu.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  totalItem = 0;
  orderedItem: Item[] = [];
  totalCartValue = 0;

  constructor() {}

  addToCart(item: Item) {
    let index = -1;
    this.orderedItem.forEach((p) => {
      if (p.name === item.name) {
        index = this.orderedItem.indexOf(p);
      }
    });
    if (index === -1) {
      item.itemQuantity = 1;
      this.orderedItem.push(item);
    } else {
      item.itemQuantity += 1;
      this.orderedItem[index] = item;
    }
    this.totalItem += 1;
    this.totalCartValue += item.price;
  }
  clearCart() {
    this.orderedItem = [];
    this.totalCartValue = 0;
  }
  removeItem(item: Item) {
    const index: number = this.orderedItem.indexOf(item);
    if (index !== -1) {
      this.orderedItem.splice(index, 1);
    }
  }
  removeQuantity(item: Item) {
    let index = -1;
    this.orderedItem.forEach((p) => {
      if (p.name === item.name) {
        index = this.orderedItem.indexOf(p);
      }
    });
    if (index !== -1) {
      if (item.itemQuantity === 1) {
        this.removeItem(item);
      } else {
        item.itemQuantity -= 1;
        this.orderedItem[index] = item;
      }
    }
    this.totalItem -= 1;
    this.totalCartValue -= item.price;
  }
}
