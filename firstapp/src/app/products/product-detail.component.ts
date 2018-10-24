import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
    templateUrl: './product-detail.component.html'
})

export class ProductDetailComponent implements OnInit {
    id: Number;
    title: String;
    name: String;
    description: String;
    img: String;
    constructor(private _route: ActivatedRoute) {}

    ngOnInit(): void {
        this.id = this._route.snapshot.params['id'];
        this.title = `Loading Detail for product ${this.id}`;

        this._route
            .queryParams
            .subscribe((params) => {
                this.name = params['name'];
                this.description = params['desc'];
                this.img = params['img'];
            });
    }
}
