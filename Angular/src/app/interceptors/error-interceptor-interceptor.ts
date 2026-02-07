import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
// import { inject, PLATFORM_ID } from '@angular/core';

import { catchError, throwError } from 'rxjs';
// import { isPlatformBrowser } from '@angular/common';
import Snackbar from 'awesome-snackbar';

export const errorInterceptorInterceptor: HttpInterceptorFn = (req, next) => {

  return next(req).pipe(
    catchError(error => {

      new Snackbar(
        error.message || 'API Error',
        {
          position: 'top-center',
          timeout: 3000,
        }
      );

      return throwError(() => error);
    })
  );
};
