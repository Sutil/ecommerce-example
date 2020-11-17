import { ProductViewModule } from './../product-view/product-view.module';
import { FooterModule } from './../footer/footer.module';
import { HeaderModule } from './../header/header.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';



@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    ProductViewModule,
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
