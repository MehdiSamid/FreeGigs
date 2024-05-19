import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuardGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const auth = inject(AuthService);
  if(auth.isAuth){
    return true ;
  }
  else {
    return router.createUrlTree(['/login']);
  }

};
