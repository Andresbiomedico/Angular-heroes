import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { canActivateGuard,canMatchGuard } from './auth/guards/auth.guard';
import { canActivatePublicGuard,publiCanMatchPublicGuard } from './auth/guards/public.guard';
import { Error404PageComponent } from './shared/pages/error404-page/error404-page.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    canActivate:[canActivatePublicGuard],
    canMatch:[publiCanMatchPublicGuard]
  },
  {
    path: 'heroes',
    loadChildren: () => import('./heroes/heroes.module').then(m => m.HeroesModule),
    canActivate:[canActivateGuard],
    canMatch:[canMatchGuard]
  },
  {
    path: '404',
    component:Error404PageComponent
  },
  {
    path: '',
    redirectTo:'heroes',
    // para especificar que sea  exactamente la ruta por eso se coloca el pathmarch
    pathMatch:'full'
  },
  {
    path: '**',
    redirectTo:'404',
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
