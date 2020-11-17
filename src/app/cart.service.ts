import { Product } from './product';
import { CartItem } from './cart-item';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = new BehaviorSubject<CartItem[]>([]);



  constructor() { }
}
