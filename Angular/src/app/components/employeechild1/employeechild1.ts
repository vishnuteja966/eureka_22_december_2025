import { CommonModule } from '@angular/common';
import { Component, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employeechild1',
  imports: [CommonModule, FormsModule],
  templateUrl: './employeechild1.html',
  styleUrl: './employeechild1.css',
  inputs: ['newEmp'],
  outputs: ['add'],
})
export class Employeechild1 {
  newEmp: any;
  add = new EventEmitter<void>();
}