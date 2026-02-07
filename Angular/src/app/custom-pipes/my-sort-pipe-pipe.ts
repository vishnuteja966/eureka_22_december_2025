import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mySortPipe',
  pure: false
})
export class MySortPipePipe implements PipeTransform {

  transform(arr: number[]) {
    console.log('sort pipe called');
    return arr.sort((a, b) => a - b);
  }

}
