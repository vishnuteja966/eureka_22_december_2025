import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roman',
  standalone: true
})
export class RomanPipe implements PipeTransform {
  transform(value: number | string | null | undefined): string {
    if (value === null || value === undefined || value === '') return '';

    const num = Number(value);
    if (!Number.isInteger(num) || num <= 0) return '';
    if (num > 3999) return ''; // optional

    const pairs: Array<[number, string]> = [
      [1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'],
      [100, 'C'],  [90, 'XC'],  [50, 'L'],  [40, 'XL'],
      [10, 'X'],   [9, 'IX'],   [5, 'V'],   [4, 'IV'],
      [1, 'I']
    ];

    let n = num;
    let out = '';

    for (const [v, s] of pairs) {
      while (n >= v) {
        out += s;
        n -= v;
      }
    }
    return out;
  }
}