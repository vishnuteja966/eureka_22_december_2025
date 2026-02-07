import { Component } from '@angular/core';
import userData from './user_data';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { NgxPaginationModule } from 'ngx-pagination';
import Swal from 'sweetalert2';
import Snackbar from 'awesome-snackbar';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-list',
  imports: [
    FontAwesomeModule,
    NgxPaginationModule,
    RouterLink
  ],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
})
export class UserList {
  userArr = userData;
  faPhone = faPhone;
  p = 1;

  openSweetAlert() {
    // Swal.fire('Good job!', 'You clicked the button!', 'success');
    Swal.fire({ title: "The Internet?", text: "That thing is still around?", icon: "question", timer: 5000, draggable: true });
  }
  openSnackBar() {
    new Snackbar('Helloooo, Good Morning',
      { position: 'top-center', theme: 'light', timeout: 5000, actionText: 'X' }
    );
  }
}