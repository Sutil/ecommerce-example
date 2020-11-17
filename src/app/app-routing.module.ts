import { HomeModule } from './home/home.module';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      }
    ]
  }];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HomeModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
