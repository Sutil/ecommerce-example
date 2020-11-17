import { Product } from './product';
import { CartItem } from './cart-item';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = new BehaviorSubject<CartItem[]>([]);

  add(product: Product): void {
    const items = this.getItems();

    const item = items.find(i => i.product.id === product.id);
    if (item) {
      item.count++;
    } else {
      items.push({
        product,
        count: 1,
      });
    }
    this.cart.next(items);
  }

  remove(product: Product): void {
    const items = this.getItems();
    const item = items.find(i => i.product.id === product.id);
    if (item && item.count > 0) {
      item.count--;
    }

    if (item && item.count === 0) {
      const index = items.findIndex(i => i.product.id === product.id);
      items.splice(index, 1);
    }

    this.cart.next(items);
  }

  find(product: Product): CartItem {
    return this.getItems().find(item => item.product.id === product.id);
  }

  getItems(): CartItem[] {
    return this.cart.value;
  }

  constructor() { }
}
