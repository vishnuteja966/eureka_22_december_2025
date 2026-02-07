import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface EmployeeModel {
  id: any;
  name: string;
  role: string;
}

const initialEmployees: EmployeeModel[] = [
  { id: 1, name: 'John', role: 'Developer' },
  { id: 2, name: 'Sara', role: 'QA Engineer' },
];

@Injectable({
  providedIn: 'root',
})
export class Employee {
  private employeeSubject = new BehaviorSubject<EmployeeModel[]>(initialEmployees);

  readonly employeeObs = this.employeeSubject.asObservable();

  private employeeArr: EmployeeModel[] = this.employeeSubject.value;

  private nextId = 3;

  addEmployee(newEmployee: any) {
    newEmployee.id = this.nextId++;
    this.employeeArr.push(newEmployee);
    this.employeeSubject.next([...this.employeeArr]);
  }

  deleteEmployee(id: number) {
    this.employeeArr.forEach((emp, index) => {
      if (emp.id === id) {
        this.employeeArr.splice(index, 1);
      }
    });
    this.employeeSubject.next([...this.employeeArr]);
  }

  clearEmployee() {
    this.employeeArr = [];
    this.employeeSubject.next([]);
  }
}
