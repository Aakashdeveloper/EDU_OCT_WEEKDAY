import { Component, OnInit } from '@angular/core';
import { ProductService} from './product.services';

@Component({
    selector: 'app-prod',
    templateUrl: './product.component.html',
    // styles: ['thead{color:purple}', 'h3{color:olive}'],
    styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
    title: String = '****Product list****';
    showImage: Boolean = true;
    showTable: Boolean = false;
    inputData: String;
    imageWidth: Number = 100;
    products: any[];

    constructor(private _productSerice: ProductService ) {

    }
    ngOnInit(): void {
       this._productSerice.getProducts()
       .subscribe((data) => this.products = data);
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    onDataRecieve(message: string): void {
        this.title = '****product list >>>>' + message;
    }
}



/*
one way binding
--data binding {{}}
--property binding []
--event binding ()
two way binding [()]


var
let
const

function add(a,b){
    var name = 'aaaa'
}
var a= 10
if(a==10){
    let city1='london'
}
*/
