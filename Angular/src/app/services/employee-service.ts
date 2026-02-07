import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private employee_url = 'http://localhost:3000/employees';
  private httpClient = inject(HttpClient);

  /* getAllEmployees() { // fetching JS objects from API returns as it is to component
    return this.httpClient.get(this.employee_url);
  } */

  // fetch JS objects from API, convert each obj to Employee and returns as it is to component
  getAllEmployees(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(this.employee_url).pipe(
      map((responseArr: Employee[]) => {
        return responseArr.map((empInfo: Employee) => {
          let { id, firstName, lastName, sal, gender } = empInfo;
          return new Employee(id, firstName, lastName, sal, gender);
        });
      })
    );
  }

}