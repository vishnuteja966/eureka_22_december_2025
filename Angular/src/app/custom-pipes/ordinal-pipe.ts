import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordinal',
  pure: true
})
export class OrdinalPipe implements PipeTransform {
  transform(input: number) {
    let rem = input % 10;
    let res = '';
    switch (rem) {
      case 1: res = input + 'st'; break;
      case 2: res = input + 'nd'; break;
      case 3: res = input + 'rd'; break;
      case 4: res = input + 'th'; break;
      default: res = input + ''; break;
    }
    return res;
  }
}
