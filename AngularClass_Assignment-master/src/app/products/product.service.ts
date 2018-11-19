import { Injectable } from '@angular/core';
import { IProduct } from './product';
import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { map } from 'rxjs/operators';

@Injectable()

export class ProductService {
    private _productUrl = 'https://ngproductsparam.herokuapp.com/api/getProductDetails';
    
    constructor(private _http: Http,
        private __http: HttpClient) {}

        private extractData(res: Response) {
            return res.json();
        }

        getProduct(): Observable<IProduct[]> {
            return this.__http.get<IProduct[]>(this._productUrl);
        }
}