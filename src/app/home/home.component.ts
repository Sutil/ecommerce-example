import { CartItem } from './../cart-item';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  items: CartItem[] = [];

  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < 7; i++) {
      const item = {
        product: {
          id: 1,
          nome: 'Test',
          url: 'sss',
          valor: 10,
        },
      count: 2,
      };
      this.items.push(item);
    }
  }

}
