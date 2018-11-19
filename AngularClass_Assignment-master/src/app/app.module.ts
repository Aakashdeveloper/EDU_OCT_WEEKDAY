import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import{FilterProducts} from './products/filterProducts.pipe';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { StarComponent } from './shared/star.component';
import { AppComponent } from './app.component';
import { ProductComponent } from './products/product.component';
import { ProductService } from './products/product.service';
import { HomeComponent } from './Home/home.component';
import { MovieComponent } from './Movies/movie.component';
import { OrderComponent } from './Orders/order.component';
import { ProductDetailsComponent } from './products/productDetails.component';
import { NotFoundComponent } from './notfound.component';
import { MovieService } from './Movies/movie.service';

@NgModule({//BDIP
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    ProductComponent,
    FilterProducts,
    HomeComponent,
    MovieComponent,
    OrderComponent,
    ProductDetailsComponent,
    NotFoundComponent,
    StarComponent,
      
  ],
  imports: [ 
    BrowserModule,
    FormsModule, 
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'products', component: ProductComponent},
      {path:'products/:id', component: ProductDetailsComponent},
      {path:'orders', component: OrderComponent},
      {path:'home', component: HomeComponent},
      {path:'movies', component: MovieComponent},
      {path:'', redirectTo:'home', pathMatch: 'full'},
      {path:'**', component: NotFoundComponent},
    ])
    
  ],
  providers: [
    ProductService,
    MovieService
  ]
})
export class AppModule { }
