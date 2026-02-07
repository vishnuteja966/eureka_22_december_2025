import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserInfo {
  // userRole = localStorage.getItem('userRole');
  
  userRole = 'student';

  //userRole = 'teacher';

}
