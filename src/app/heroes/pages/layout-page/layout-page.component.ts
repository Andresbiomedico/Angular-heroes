import { Component } from '@angular/core';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: [
  ]
})
export class LayoutPageComponent {
  public sidebarItems= [
    {
      label:'listado',
      icon:'label',
      url:'./list'
    },
    {
      label:'Añadir',
      icon:'add',
      url:'./new-hero'
    },
    {
      label:'Buscar',
      icon:'search',
      url:'./search'
    }
  ]

constructor(private authService:AuthService,
  private router:Router){}

  onLogout(){
    this.authService.logout();
    this.router.navigate(['/auth/login'])
  }

  get user(){
    return this.authService.currentUser;
  }
}
