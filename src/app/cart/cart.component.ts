import { Product } from './../product';
import { ShowCartService } from './../show-cart.service';
import { CartService } from './../cart.service';
import { CartItem } from './../cart-item';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {

  items: CartItem[] = [];

  showCart = false;

  private subscriptions: Subscription[] = [];

  constructor(private cartService: CartService, private showCartService: ShowCartService) { }

  ngOnInit(): void {
    const cartSubscription = this.cartService.cart.subscribe(
      items => this.items = items
    );
    this.subscriptions.push(cartSubscription);

    const showCartSubscription = this.showCartService
      .showCart$.subscribe(showCart => this.showCart = showCart);

    this.subscriptions.push(showCartSubscription);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  remove(product: Product): void {
    this.cartService.remove(product);
  }

  add(product: Product): void {
    this.cartService.add(product);
  }

}
