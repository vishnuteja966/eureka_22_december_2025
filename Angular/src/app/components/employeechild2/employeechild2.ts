import { CommonModule } from '@angular/common';
import { Component, EventEmitter } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-employeechild2',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './employeechild2.html',
  styleUrl: './employeechild2.css',
  inputs: ['employees', 'faStar', 'faEye', 'faTrash'],
  outputs: ['view', 'del'],
})
export class Employeechild2 {

  // inputs
  employees: any[] = [];
  faStar: any;
  faEye: any;
  faTrash: any;

  // outputs
  view = new EventEmitter<any>();
  del = new EventEmitter<any>();

}