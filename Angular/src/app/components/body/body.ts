import { Component, ViewEncapsulation  } from '@angular/core';
import { Databindhing } from '../databindhing/databindhing';
import { Directives } from '../directives/directives';
import { ProductList } from '../product-list/product-list';
import { UserList } from '../user-list/user-list';
import { MyModel } from '../my-model/my-model';
import { EmployeeCrud } from '../employee-crud/employee-crud';
import { TicTacToe } from '../tic-tac-toe/tic-tac-toe';
import { PipeDemo } from '../pipe-demo/pipe-demo';
import { ParentDemo } from '../parent-demo/parent-demo';

import { Demo1 } from '../demo1/demo1';
import { Demo2 } from '../demo2/demo2';
import { ClockDemo } from '../clock-demo/clock-demo';
import { CommentList } from '../comment-list/comment-list';
import { HttpDemo1 } from './../http-demo1/http-demo1';
import { ObservableDemo1 } from '../observable-demo1/observable-demo1';
import { ObservableDemo2 } from '../observable-demo2/observable-demo2';
import { ObservableDemo3 } from '../observable-demo3/observable-demo3';
import { SubjectDemo1 } from '../subject-demo1/subject-demo1';
import { TodoAdd } from '../todo-add/todo-add';
import { TodoList } from '../todo-list/todo-list';
import { EmployeeSubject } from '../employee-subject/employee-subject';
import { SignalDemo1 } from '../signal-demo1/signal-demo1';
import { SignalDemo2 } from '../signal-demo2/signal-demo2';
import { TodoSignal } from '../todo-signal/todo-signal';
import { FormDemo1 } from '../form-demo1/form-demo1';
import { TemplateForm } from '../template-form/template-form';
import { ModelDrivenForm } from '../model-driven-form/model-driven-form';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-body',
  imports: [//Databindhing,
    //Directives,
    //MyModel,
    // ProductList,
    // //UserList,
    //EmployeeCrud,
    // TicTacToe,
    // PipeDemo,
    // ParentDemo,
    // Demo1,
    // Demo2,
    // ClockDemo,
    //CommentList,
    // ObservableDemo1,
    // ObservableDemo2,
    // ObservableDemo3,
    // SubjectDemo1,
    // TodoList,
    // TodoAdd,
    // EmployeeSubject,
    // SignalDemo1,
    // SignalDemo2,
    //TodoSignal,
    //FormDemo1,
    //TemplateForm,
    //ModelDrivenForm,
    RouterOutlet
    ],
  templateUrl: './body.html',
  styleUrl: './body.css',
  encapsulation: ViewEncapsulation.Emulated
})
export class Body {
  flag = true;
}
