import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './products/product.component';
import { MyUpperPipe } from './products/myUpperCase.pipe';
import { DiscountPipe } from './products/discountedPrice.pipe';
import { ProductFilter } from './products/productFilter.pipe';
import { StarComponent } from './shared/star.component';
import { ProductService } from './products/product.services';


@NgModule({
    // all module
    imports: [
        BrowserModule,
        FormsModule
    ],
    // all components & pipe
    declarations: [
        AppComponent,
        HomeComponent,
        ProductComponent,
        MyUpperPipe,
        DiscountPipe,
        ProductFilter,
        StarComponent
    ],

    // only first component
    bootstrap: [
        AppComponent
    ],

    // all services
    providers: [
        ProductService
    ]
})

export class AppModule {

}


/*
if(product){

}
*/
