import { HttpClient } from '@angular/common/http';
import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userdetails',
  imports: [],
  templateUrl: './userdetails.html',
  styleUrl: './userdetails.css',
})
export class Userdetails{
  user: any = signal({});
  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient) {
  }
ngOnInit() {
  this.activatedRoute.params.subscribe(params => {
    this.http.get(`https://jsonplaceholder.typicode.com/users/${params['id']}`).subscribe(response => {
      this.user.set(response);
    });
  });
}
}
