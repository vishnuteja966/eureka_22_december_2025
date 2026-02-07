import { CanDeactivateFn } from '@angular/router';

export const hasChangesGuard: CanDeactivateFn<unknown> = (component: any, currentRoute, currentState, nextState) => {
  if (component.isSubmitted) {
    return true;
  } else {
    alert('plz save the page before leaving')
    return false;
  }
};
