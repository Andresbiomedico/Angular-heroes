import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { enviroments } from '../../enviroments/environments';
import { User } from '../auth/interfaces/user.interface';
import { map, Observable, of, tap, catchError } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class AuthService {
  private baseUrl = enviroments.baseUrl
  private user?: User;

  constructor(private http: HttpClient) { }

  get currentUser(): User | undefined {
    if (!this.user) return undefined;
    return structuredClone(this.user)
  }

  login(email: string, password: string): Observable<User> {
    const url = `${this.baseUrl}/users/1`
    return this.http.get<User>(url)
      .pipe(
        tap((user) => this.user = user),
        tap((user) => localStorage.setItem('token', 'AS1i2y3hSD7.asdasd.asdasf123k'))
      );

  }
  checkAuthetication(): Observable<boolean> {
    if (!localStorage.getItem('token')) return of(false)

    const token = localStorage.getItem('token')
    return this.http.get<User>(`${this.baseUrl}/users/1`)
      .pipe(
        tap((user) => this.user = user),
        map((user) => !!user),
        catchError(() => of(false))
      )
  }

  logout() {
    this.user = undefined;
    localStorage.clear()
  }
}

