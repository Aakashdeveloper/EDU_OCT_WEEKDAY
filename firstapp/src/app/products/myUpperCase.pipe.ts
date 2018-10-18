import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'myCase'
})

export class MyUpperPipe implements PipeTransform {
    transform(value: string, type: string) {
        if (type === 'upper') {
            value = value.toUpperCase();
        } else {
            value = value.toLowerCase();
        }
        return value;
    }
}
