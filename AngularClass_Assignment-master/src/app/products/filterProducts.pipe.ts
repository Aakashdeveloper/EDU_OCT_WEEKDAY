import{Pipe, PipeTransform } from '@angular/core';
import {IProduct} from './product';

@Pipe({
name: 'filterProducts'
})

export class FilterProducts implements PipeTransform{
    transform(value: IProduct[], filterBy: string) {
        filterBy = filterBy?filterBy.toLowerCase():null;
        return filterBy?
        value.filter((product:IProduct)=>(product.productName.toLowerCase().indexOf(filterBy.trim())!==-1 || product.productCode.toLowerCase().indexOf(filterBy.trim())!==-1)) :value;        
    }
}