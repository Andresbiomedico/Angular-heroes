import { map, Observable, of, tap } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  CanMatchFn,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
} from '@angular/router';
import { inject } from '@angular/core';

//No hay necesidad de crear una clase, simplemente definiendo una función flecha y exportándola podemos utilizar sus funcionalidades de guard en el app-routing
export const canActivatePublicGuard: CanActivateFn = ( //Hay que tener en cuenta el tipado CanActiveFn
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  return checkAuthStatus();
};

export const publiCanMatchPublicGuard: CanMatchFn = ( //Tipado CanMatchFN
  route: Route,
  segments: UrlSegment[]
) => {
  return checkAuthStatus();
};

const checkAuthStatus = ():boolean | Observable<boolean> =>{
  const authService:AuthService = inject(AuthService);
  const router: Router = inject(Router);
  return authService.checkAuthetication()
  .pipe(
    tap(isAuthenticate=>{
      if(isAuthenticate){
        router.navigate(['./'])
      }
    }),
    map((isAuthenticate)=>!isAuthenticate)
  )
}
