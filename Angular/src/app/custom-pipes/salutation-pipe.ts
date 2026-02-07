import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salutation',
  standalone: true
})
export class SalutationPipe implements PipeTransform {
  transform(name: string, gender?: string): string {
    if (!name) return '';

    const g = (gender ?? '').toLowerCase();
    const prefix =
      g === 'male' || g === 'm' ? 'Mr.' :
      g === 'female' || g === 'f' ? 'Miss.' : '';

    return prefix ? `${prefix} ${name}` : name;
  }
}
