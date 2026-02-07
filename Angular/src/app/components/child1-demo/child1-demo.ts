import { Component } from '@angular/core';

@Component({
  selector: 'app-child1-demo',
  imports: [],
  templateUrl: './child1-demo.html',
  styleUrl: './child1-demo.css',
  inputs: ['a', 'userName']
})
export class Child1Demo {
  a: any;
  userName: any;

  constructor() {
    console.log('child constructor');
  }
  ngOnInit() {
    console.log('child ngOnInit');
  }
  ngOnChanges(myChanges: any) {
    console.log('child ngOnChanges');
    console.log(myChanges)
  }
}