import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProductComponent } from './product.component';
import { MyUpperPipe } from './myUpperCase.pipe';
import { DiscountPipe } from './discountedPrice.pipe';
import { ProductFilter } from './productFilter.pipe';
import { ProductDetailComponent } from './product-detail.component';
import { ProductService } from './product.services';
import { SharedModule } from '../shared/shared.module';
import { RouterGaurds } from './prouduct_routerGaurd';

@NgModule({
    imports: [
        RouterModule.forChild([
            {path: 'products', component: ProductComponent},
            {path: 'products/:id', canActivate: [RouterGaurds], component: ProductDetailComponent}
        ]),
        SharedModule
    ],
    declarations: [
        ProductComponent,
        MyUpperPipe,
        DiscountPipe,
        ProductFilter,
        ProductDetailComponent
    ],
    providers: [
        ProductService,
        RouterGaurds
    ]
})

export class ProductModule {

}
