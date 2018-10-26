import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product.model';
import { ProductService } from './product.services';



@Component({
    templateUrl: './product-detail.component.html'
})

export class ProductDetailComponent implements OnInit {
    id: Number;
    title: String;
    name: String;
    description: String;
    img: String;
    details: IProduct[];

    constructor(private _route: ActivatedRoute,
                private _router: Router,
                private _productService: ProductService) {}

    ngOnInit(): void {
        this.id = this._route.snapshot.params['id'];
        this.title = `Loading Detail for product ${this.id}`;

        this._productService.getProductDetail(this.id)
            .subscribe((data) => this.details = data);
    }

    onBack(): void {
        this._router.navigate(['products']);
    }
}

/*
var add = (c) => {return c+c}
ngOnInit(): void {
        this.id = this._route.snapshot.params['id'];
        this.title = `Loading Detail for product ${this.id}`;

        this._route
            .queryParams
            .subscribe((data) => {
                this.name = data['name'];
                this.description = data['descs'];
                this.img = data['img'];
            });
    }
*/

