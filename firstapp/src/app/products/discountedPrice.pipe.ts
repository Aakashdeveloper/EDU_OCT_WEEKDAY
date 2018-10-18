import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'discount'
})

export class DiscountPipe implements PipeTransform {
    transform(value: number, ration: string , type: string) {
        if (type === '+') {
            value = value + parseInt(ration);
        } else {
            value = value - parseInt(ration);
        }
        return value;
    }
}
