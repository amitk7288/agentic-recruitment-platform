import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  // TODO: replace with AuthStore once created
  const userInfo = false;
  return userInfo ? true : router.parseUrl('/login');
};
