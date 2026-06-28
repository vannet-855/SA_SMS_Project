import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class LoginComponent {
  username = '';
  password = '';
  rememberMe = true;
  showPassword = false;
  isSubmitting = false;
  errorMessage: string | null = null;

  selectedRole: 'Administrator' | 'Teacher' | 'Student' | 'Parent / Guardian' =
    'Administrator';


  constructor(private authService: AuthService, private router: Router) {}

  get isFormValid(): boolean {
    return this.username.trim().length > 0 && this.password.length > 0;
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  selectRole(role: typeof this.selectedRole): void {
    this.selectedRole = role;
  }

  onSubmit(): void {
    this.errorMessage = null;
    if (!this.isFormValid || this.isSubmitting) return;

    this.isSubmitting = true;

    const payload = {
      email: this.username.trim(),
      password: this.password,
    };


    this.authService
      .login(payload)
      .pipe(finalize(() => (this.isSubmitting = false)))
      .subscribe({
        error: () => {
          this.errorMessage = 'Invalid email or password';
        },
      });
  }

  onReset(): void {
    this.username = '';
    this.password = '';
    this.rememberMe = true;
    this.selectedRole = 'Administrator';
    this.showPassword = false;
    this.errorMessage = null;
    this.isSubmitting = false;
  }
}

