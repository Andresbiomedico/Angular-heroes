import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { Router, Route } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styles: [
  ]
})
export class LoginPageComponent {
  constructor(private authService: AuthService,
    private router: Router) { }
  onLogin(): void {
    this.authService.login('andrebio@hotmail.com', '123456')
      .subscribe((user) => {
        this.router.navigate(['/heroes/list'])
      })
  }
}
