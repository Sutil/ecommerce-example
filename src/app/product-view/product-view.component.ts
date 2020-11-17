import { CartService } from './../cart.service';
import { Product } from './../product';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscribable, Subscription } from 'rxjs';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit, OnDestroy {

  @Input()
  product: Product;

  subscription: Subscription;

  count = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.subscription = this.cartService.cart.subscribe(items => {
      const cartItem = items.find(item => item.product.id === this.product.id);
      if (cartItem) {
        this.count = cartItem.count;
      } else {
        this.count = 0;
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  add(): void {
    this.cartService.add(this.product);
  }

  remove(): void {
    this.cartService.remove(this.product);
  }

}
