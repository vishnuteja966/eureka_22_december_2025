import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-http-demo1',
  imports: [],
  templateUrl: './http-demo1.html',
  styleUrl: './http-demo1.css',
})
export class HttpDemo1 {

  user_api_url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
    // this.fetchData_javascript()
    this.fetchData_angular()
  }

  fetchData_javascript() { // fetch() return promise
    fetch(this.user_api_url).then(
      (response) => {
        response.json().then(
          (finalResponse) => {
            console.log(finalResponse)
          },
          (finalErr) => {
            console.log(finalErr)
          }
        )
      },
      (err) => {
        console.log(err)
      }
    )
  }

  fetchData_angular() { // httpClient.get() returns observable
    // old syntax
    /* this.httpClient.get(this.user_api_url).subscribe(
      (response) => { console.log(response) },
      (error) => { console.log('something went wrong', error) },
      () => { console.log('completed') },
    ); */

    // new syntax
    this.httpClient.get(this.user_api_url).subscribe({
      next: (response) => { console.log(response) },
      error: (error) => { console.log('something went wrong', error) },
      complete: () => { console.log('completed') }
    })
  }
}
