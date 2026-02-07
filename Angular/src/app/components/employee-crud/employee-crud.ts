import { Component, inject, signal, WritableSignal } from '@angular/core';
import { EmployeeService } from '../../services/employee-service';
import { Employee } from '../../models/employee';

@Component({
  selector: 'app-employee-crud',
  imports: [],
  templateUrl: './employee-crud.html',
  styleUrl: './employee-crud.css',
})
export class EmployeeCrud {
  employeeArr: WritableSignal<Employee[]> = signal([]);
  employeeService = inject(EmployeeService)

  ngOnInit() {
    this.fetchEmployees()
  }
  fetchEmployees() {
    this.employeeService.getAllEmployees().subscribe((response) => {
      this.employeeArr.set(response);
      console.log(response);
    })
  }
}