import { CanActivateFn } from '@angular/router';

export const AuthGuard: CanActivateFn = (route, state) => {
  
  const user = localStorage.getItem('user');
  if (user) {
    return true; 
  } else {
    window.location.href = '/login'; 
    return false;
  }
};
