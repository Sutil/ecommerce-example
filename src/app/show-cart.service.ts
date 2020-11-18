import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShowCartService {

  readonly showCart$ = new BehaviorSubject(false);

  constructor() { }

  toggle(): void {
    this.showCart$.next(!this.showCart$.value)
  }
}
