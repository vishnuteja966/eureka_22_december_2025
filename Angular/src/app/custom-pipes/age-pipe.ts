import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age',
  standalone: true
})
export class AgePipe implements PipeTransform {
  transform(value: Date | string | null | undefined): string {
    if (!value) return '';

    const dob = this.parseDate(value);
    if (!dob) return '';

    const today = new Date();
    if (dob > today) return '0 years old';

    let years = today.getFullYear() - dob.getFullYear();

    const hadBirthday =
      (today.getMonth() > dob.getMonth()) ||
      (today.getMonth() === dob.getMonth() && today.getDate() >= dob.getDate());

    if (!hadBirthday) years--;
    if (years < 0) years = 0;

    return `${years} years old`;
  }

  private parseDate(val: Date | string): Date | null {
    if (val instanceof Date) return isNaN(val.getTime()) ? null : val;

    const str = String(val).trim();

    // dd-mm-yyyy (example: 04-06-2020)
    const m = str.match(/^(\d{2})-(\d{2})-(\d{4})$/);
    if (m) {
      const dd = Number(m[1]);
      const mm = Number(m[2]) - 1;
      const yyyy = Number(m[3]);
      const d = new Date(yyyy, mm, dd);
      return isNaN(d.getTime()) ? null : d;
    }

    // fallback parse
    const d2 = new Date(str);
    return isNaN(d2.getTime()) ? null : d2;
  }
}