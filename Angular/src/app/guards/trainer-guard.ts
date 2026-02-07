import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { userInfo } from 'os';
import { UserInfo } from '../services/user-info';

export const trainerGuard: CanActivateFn = (route, state) => {
  let userInfo = inject(UserInfo);

  if(userInfo.userRole === 'teacher'){
    return true;
  } else{
    alert('No entry');
    return false;
  }
};
