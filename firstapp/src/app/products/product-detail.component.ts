import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/Router';

@Component({
    templateUrl: './product-detail.component.html'
})

export class ProductDetailComponent implements OnInit {
    id: Number;
    
    constructor(private _route: ActivatedRoute,
                private _router: Router) {}

    ngOnInit(): void {
        this.id = this._route.snapshot.params['id'];
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

