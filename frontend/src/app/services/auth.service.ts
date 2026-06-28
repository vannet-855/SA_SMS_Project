import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';

export interface LoginPayload {
  email: string;
  password: string;
}


export interface LoginResponse {
  token: string;
  user?: {
    id: number;
    name: string;
    email: string;
    role: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  login(payload: LoginPayload): Observable<LoginResponse> {
    return this.http
      .post<LoginResponse>(`http://localhost:3000/api/auth/login`, payload)
      .pipe(
        tap((res) => {
          localStorage.setItem('edutrack_token', res.token);
          localStorage.setItem('edutrack_user', JSON.stringify(res.user));

          const role = res.user?.role;
          if (role === 'admin') {
            this.router.navigate(['/dashboard']);
            return;
          }
          if (role === 'teacher') {
            this.router.navigate(['/teacher-dashboard']);
            return;
          }
          if (role === 'student') {
            this.router.navigate(['/student-dashboard']);
            return;
          }
          if (role === 'parent') {
            this.router.navigate(['/parent-dashboard']);
            return;
          }

          this.router.navigate(['/dashboard']);
        })
      );
  }

}

