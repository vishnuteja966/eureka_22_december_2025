import { Component } from '@angular/core';
import { AsyncSubject, BehaviorSubject, interval, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-subject-demo1',
  imports: [],
  templateUrl: './subject-demo1.html',
  styleUrl: './subject-demo1.css',
})
export class SubjectDemo1 {
  ngOnInit(){
    //this.observable_demo();
    //this.subject_demo();
    //this.behaviorSubject_demo();
    //this.replaySubject_demo();
    this.asyncSubject_demo()
  }
  observable_demo(){
    const numPublisher = interval(1000);

    numPublisher.subscribe(val => console.log(val));
  }
  subject_demo(){
    const carSubject = new Subject();

    carSubject.next('Tata');

    carSubject.subscribe(car => console.log('Subscriber-1', car));

    carSubject.next('Honda');

    carSubject.subscribe(car => console.log('Subscriber-2', car));
    carSubject.next('Maruti');
    carSubject.next('Mercedes');

  }
  behaviorSubject_demo(){
    const carSubject = new BehaviorSubject('');

    carSubject.next('Tata');

    carSubject.subscribe(car => console.log('Subscriber-1', car));

    carSubject.next('Honda');

    carSubject.subscribe(car => console.log('Subscriber-2', car));
    carSubject.next('Maruti');
    carSubject.next('Mercedes');
  }
  replaySubject_demo(){
    const carSubject = new ReplaySubject();

    carSubject.next('Tata');

    carSubject.subscribe(car => console.log('Subscriber-1', car));

    carSubject.next('Honda');

    carSubject.subscribe(car => console.log('Subscriber-2', car));
    carSubject.next('Maruti');
    carSubject.next('Mercedes');
  }
  asyncSubject_demo(){
    const carSubject = new AsyncSubject();

    carSubject.next('Tata');

    carSubject.subscribe(car => console.log('Subscriber-1', car));

    carSubject.next('Honda');

    carSubject.subscribe(car => console.log('Subscriber-2', car));
    
    carSubject.next('Maruti');

    carSubject.next('Mercedes');

    carSubject.complete();
  }
}
