import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { concatMap, forkJoin, mergeMap, of } from 'rxjs';

@Component({
  selector: 'app-observable-demo2',
  imports: [],
  templateUrl: './observable-demo2.html',
  styleUrl: './observable-demo2.css',
})
export class ObservableDemo2 {

  httpClient = inject(HttpClient);

  ngOnInit(){
    //this.forkjoin_demo();
    this.mergeMap_demo();
    this.concatMap_demo();
  }
  forkjoin_demo(){
    const user_obs = this.httpClient.get('https://jsonplaceholder.typicode.com/users');
    const comment_obs = this.httpClient.get('https://jsonplaceholder.typicode.com/comments');
    const todo_obs = this.httpClient.get('https://jsonplaceholder.typicode.com/todos');

    forkJoin([user_obs, comment_obs, todo_obs]).subscribe(
      responseArr => {
        console.log(responseArr)
      },
      err => {
        console.log('1 of the api failed')
      }
    );
  }

  mergeMap_demo(){
     const users = of(1,2,3,4,5);

    // users.subscribe((userId)=>{
    //   this.httpClient.get('').subscribe(userInfo=>{
    //     console.log(userInfo)
    //   })
    // })

    users.pipe(mergeMap((userId)=>{
      return this.httpClient.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
    })).subscribe((userResponse) => {
      console.log(userResponse)
    })
  }

  concatMap_demo(){
    const users = of(1,2,3,4,5);
    users.pipe(concatMap((userId)=>{
      return this.httpClient.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
    })).subscribe((userResponse) => {
      console.log(userResponse)
    })
  }
}
