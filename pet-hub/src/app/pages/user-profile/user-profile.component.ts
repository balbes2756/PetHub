import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  imports: [CommonModule, RouterModule],
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
}
