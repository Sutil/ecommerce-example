import { Product } from './../product';
import { ShowCartService } from './../show-cart.service';
import { CartService } from './../cart.service';
import { CartItem } from './../cart-item';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  items: CartItem[] = [];

  showCart = false;

  constructor(private cartService: CartService, private showCartService: ShowCartService) { }

  ngOnInit(): void {
    this.cartService.cart.subscribe(
      items => this.items = items
    );

    this.showCartService.showCart$.subscribe(showCart => this.showCart = showCart);
  }

  remove(product: Product): void {
    this.cartService.remove(product);
  }

  add(product: Product): void {
    this.cartService.add(product);
  }

}
