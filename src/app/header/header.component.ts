import { Component, OnInit } from '@angular/core';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  cart = faCartArrowDown;

  countItens = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
