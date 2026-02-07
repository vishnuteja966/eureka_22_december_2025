import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './interceptors/auth-interceptor';
import { retryInterceptor } from './interceptors/retry-interceptor';
import { errorInterceptorInterceptor } from './interceptors/error-interceptor-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    MatSnackBarModule,
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    
    provideHttpClient(withInterceptors([
      authInterceptor,
      retryInterceptor,
      errorInterceptorInterceptor
    ]))
  ]
};