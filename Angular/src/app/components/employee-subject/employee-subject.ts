import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeModel , Employee} from '../../services/employee';

@Component({
  selector: 'app-employee-subject',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-subject.html',
  styleUrl: './employee-subject.css',
})
export class EmployeeSubject {
  employees: EmployeeModel[] = [];

  constructor(private employeeService: Employee) {
    this.employeeService.employeeObs.subscribe((data) => {
      this.employees = data;
    });
  }

  addEmployee(name: string, role: string) {
    if (!name || !role) return;

    this.employeeService.addEmployee({
      name: name.trim(),
      role: role.trim(),
    });
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id);
  }

  clearAll() {
    this.employeeService.clearEmployee();
  }
}