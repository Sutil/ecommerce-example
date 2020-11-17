import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductViewComponent } from './product-view.component';
import { LOCALE_ID } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import {registerLocaleData} from '@angular/common';

registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [ProductViewComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ProductViewComponent,
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt'}
  ]
})
export class ProductViewModule { }
