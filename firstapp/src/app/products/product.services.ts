import { Injectable} from '@angular/core';
import { Http, Response} from '@angular/http';
import { HttpClient} from '@angular/common/http';
import { IProduct } from './product.model';
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators';


@Injectable()

export class ProductService {

    private _productUrl = 'https://ngproductsparam.herokuapp.com/api/getProductDetails';

    constructor(private _http: Http,
                private _httpClient: HttpClient) {}

    private extractData(res: Response) {
        return res.json();
    }
    getProducts(): Observable<IProduct[]> {
        return this._httpClient.get<IProduct[]>(this._productUrl)
    }
}

/*
getProducts(): Observable<IProduct[]> {
        return this._http.get(this._productUrl)
            .pipe(map(this.extractData))
        ;
    }

getProducts(): Promise<IProduct[]> {
        return this._http.get(this._productUrl).toPromise().then((res) => res.json());
    }


*/
