import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Employee } from '../models/employee.model';


@Injectable()

export class FormPosterService {

    constructor(private _http: Http) {

    }

    private extractData(res: Response) {
        const outres = res.json();
        return outres.fields || { };
    }

    postEmployee(employee: Employee): Observable<any> {
        // console.log('getting data in service' + employee);
        const body = JSON.stringify(employee);
        const headers = new Headers({'Content-Type': 'application/json'});
        const options = new RequestOptions({headers: headers});

        return this._http.post('http://localhost:3100/postEmployee', body, options)
                    .pipe(map(this.extractData));
    }
}
