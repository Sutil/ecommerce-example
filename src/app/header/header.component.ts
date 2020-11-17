import { CartService } from './../cart.service';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  countItens = 0;

  subscription: Subscription;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.subscription = this.cartService.cart.subscribe(items => {
      this.countItens = items.reduce((acc, item)  =>  acc + item.count, 0);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
