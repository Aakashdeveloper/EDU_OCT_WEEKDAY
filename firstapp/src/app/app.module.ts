import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule} from '@angular/Router';

import { AppComponent } from './app.component';
import { ProductComponent } from './products/product.component';
import { MyUpperPipe } from './products/myUpperCase.pipe';
import { DiscountPipe } from './products/discountedPrice.pipe';
import { ProductFilter } from './products/ProductFilter.pipe';
import { StarComponent } from './shared/star.component';
import { ProductService } from './products/product.services';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './orders/order.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { NotFoundComponent } from './shared/notFound.component';

@NgModule({

    // All module will declare here
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        HttpClientModule,
        RouterModule.forRoot([
            {path: 'products', component: ProductComponent},
            {path: 'products/:id', component: ProductDetailComponent},
            {path: 'orders', component: OrderComponent},
            {path: 'home', component: HomeComponent},
            {path: '', redirectTo: 'home', pathMatch: 'full'},
            {path: '**', component: NotFoundComponent},
        ])
    ],
    // All component & pipes
    declarations: [
        AppComponent,
        HomeComponent,
        ProductComponent,
        MyUpperPipe,
        DiscountPipe,
        ProductFilter,
        StarComponent,
        OrderComponent,
        ProductDetailComponent,
        NotFoundComponent
    ],

    // only first component
    bootstrap: [
        AppComponent
    ],

    // Your services will declare here
    providers: [
        ProductService
    ]
})


export class AppModule {

}

