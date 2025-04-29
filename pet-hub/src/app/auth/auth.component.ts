import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-auth',
  imports: [CommonModule, FormsModule],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  username = '';
  password = '';
  loginFailed = false;

  constructor(private router: Router) {}

  login() {
    if (this.username === 'admin' && this.password === '1234') {
      localStorage.setItem('isAuthenticated', 'true');
      location.reload(); // обновит приложение и отобразит основной интерфейс
    } else {
      this.loginFailed = true;
    }
  }
}
