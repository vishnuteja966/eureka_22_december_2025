import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'employeeFilter',
  standalone: true
})
export class EmployeeFilterPipe implements PipeTransform {
  transform(employees: any[] | null | undefined, searchText: string): any[] {
    if (!employees) return [];
    if (!searchText || !searchText.trim()) return employees;

    const q = searchText.toLowerCase().trim();

    return employees.filter(e => {
      const id = String(e?.id ?? '').toLowerCase();
      const name = String(e?.name ?? '').toLowerCase();
      const dept = String(e?.dept ?? '').toLowerCase();
      const gender = String(e?.gender ?? '').toLowerCase();

      return id.includes(q) || name.includes(q) || dept.includes(q) || gender.includes(q);
    });
  }
}