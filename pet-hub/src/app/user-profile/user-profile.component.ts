import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss',
})
export class UserProfileComponent {
  pets = [
    { name: 'Барсик', description: 'Заглушка для кота' },
    { name: 'Шарик', description: 'Заглушка для собаки' },
    { name: 'Кеша', description: 'Заглушка для попугая' },
  ];

  constructor(private router: Router) {}

  logout(): void {
    localStorage.removeItem('isAuthenticated');
    location.reload();
  }
}
