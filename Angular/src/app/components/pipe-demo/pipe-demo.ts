import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { interval, map } from 'rxjs';
import { OrdinalPipe } from '../../custom-pipes/ordinal-pipe';
import { RomanPipe } from '../../custom-pipes/roman-pipe';
import { AgePipe } from '../../custom-pipes/age-pipe';
import { SalutationPipe } from '../../custom-pipes/salutation-pipe';
import { EmployeeFilterPipe } from '../../custom-pipes/employee-filter-pipe';
import { MySortPipePipe } from '../../custom-pipes/my-sort-pipe-pipe';

@Component({
  selector: 'app-pipe-demo',
  imports: [CommonModule,
    FormsModule,
    OrdinalPipe,
    RomanPipe,
    AgePipe,
    SalutationPipe,
    EmployeeFilterPipe,
    MySortPipePipe
  ],
  templateUrl: './pipe-demo.html',
  styleUrl: './pipe-demo.css',
})
export class PipeDemo {
  userName: string = 'Sachin TendULkar';
  mySal: number = 47567;
  dateObj = new Date();
  user = {
    firstName:'Vishnu',
    lastName: 'Teja',
    age: 26,
    address:'India'
  }
  cars = ['Tata', 'Honda', 'Maruti', 'Hyundai', 'Toyota'];
  num = interval(1000);
  time = interval(1000).pipe(map(val => new Date().toLocaleTimeString()));
  myNum = 21;
  r1 = 4;
  r2 = 8;
  r3 = 9;

  dob = '04-06-2020';

  employees = [
    { id: 101, name: 'Vishnu', gender: 'Male', dept: 'IT', salary: 65000 },
    { id: 102, name: 'Teja', gender: 'Female', dept: 'HR', salary: 52000 },
    { id: 103, name: 'Sachin', gender: 'Male', dept: 'Sales', salary: 48000 },
    { id: 104, name: 'Anu', gender: 'Female', dept: 'Finance', salary: 72000 }
  ];

  searchText = '';

  arr = [20, 30, 40, 50]

  testFun(){
    console.log('I am test function')
  }
}
