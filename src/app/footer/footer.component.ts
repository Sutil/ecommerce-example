import { Subscription } from 'rxjs';
import { CartService } from './../cart.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, OnDestroy {

  valorTotal = 0;
  subscription: Subscription;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.subscription = this.cartService.cart.subscribe(items => {
      this.valorTotal = items.reduce((acc, item)  =>  acc + item.product.price * item.count, 0);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
