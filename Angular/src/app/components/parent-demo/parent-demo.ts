import { Component, ElementRef, ViewChild } from '@angular/core';
import { Child1Demo } from '../child1-demo/child1-demo';
import { Child2Demo } from '../child2-demo/child2-demo';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parent-demo',
  imports: [
    FormsModule,
    Child1Demo,
    Child2Demo
  ],
  templateUrl: './parent-demo.html',
  styleUrl: './parent-demo.css',
})
export class ParentDemo {
  a = 100;
  num: number;

  @ViewChild('myBox1') myInputBox1: any;

  parentCourseName: string = '';
  receiveDataFromChild(courseName: string) {
    this.parentCourseName = courseName;
  }
  addition(a: any, b: any) {
    console.log(`Addition of ${a} and ${b} is ${+a + +b}`)
  }
  // creating instance of ElementRef class inside ParentDemo(Dependency Injection)
  // let ele = new ElementRef();
  constructor(private ele: ElementRef) {
    this.num = 10;
    console.log("Parent constructor")
    console.log(this.myInputBox1)
  }
  // ngOnInit() {
  //   console.log('Parent ngOnInit');
  // }
  // ngOnChanges() {
  //   console.log('Parent ngOnChanges');
  // }
  // ngDoCheck() {
  //   console.log('Parent ngDoCheck');
  // }
  // ngAfterContentInit() {
  //   console.log('Parent ngAfterContentInit');
  // }
  // ngAfterContentChecked() {
  //   console.log('Parent ngAfterContentChecked')
  // }
  ngAfterViewInit() {
    console.log('Parent ngAfterViewInit');
    console.log(this.myInputBox1);
    this.myInputBox1.nativeElement.focus();
  }
  // ngAfterViewChecked() {
  //   console.log('Parent ngAfterViewChecked');
  // }
  // ngOnDestroy() {
  //   console.log('Parent ngOnDestory');
  // }
}