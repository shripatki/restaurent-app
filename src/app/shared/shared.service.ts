import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private ifDineIn: BehaviorSubject<boolean>;
  private totalItemsInCart: BehaviorSubject<number>;
  private ifOrderPlaced: BehaviorSubject<boolean>;
  constructor() {
    this.ifDineIn = new BehaviorSubject<boolean>(false);
    this.totalItemsInCart = new BehaviorSubject<number>(0);
    this.ifOrderPlaced = new BehaviorSubject<boolean>(false);
  }

  getIfDineIn(): Observable<boolean> {
    return this.ifDineIn.asObservable();
  }
  setIfDineIn(value: boolean) {
    this.ifDineIn.next(value);
  }
  getTotalItemsInCart(): Observable<number> {
    return this.totalItemsInCart.asObservable();
  }
  setTotalItemsInCart(value): void {
    this.totalItemsInCart.next(value);
  }
  getIfOrderPlaced(): Observable<boolean> {
    return this.ifOrderPlaced.asObservable();
  }
  setIfOrderPlaced(value): void {
    this.ifOrderPlaced.next(value);
  }
}
