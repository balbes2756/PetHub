import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Pet {
  id: number;
  name: string;
  description: string;
  avatarUrl?: string;
}

@Component({
  selector: 'app-user-profile',
  imports: [CommonModule, RouterModule],
  standalone: true,
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss',
})
export class UserProfileComponent {
  pets: Pet[] = [
    { id: 1, name: 'Барсик', description: 'Заглушка для кота' },
    { id: 2, name: 'Шарик', description: 'Заглушка для собаки' },
    { id: 3, name: 'Кеша', description: 'Заглушка для попугая' },
  ];

  nextId = 4;

  // Редактирование профиля
  editProfile() {
    // Здесь можно открыть форму или перейти на /edit
    alert('Функция редактирования профиля');
  }

  // Добавление питомца
  addPet() {
    const newPet = {
      id: this.nextId,
      name: 'Новый питомец',
      description: 'Описание не указано',
    };
    this.pets.push(newPet);
    this.nextId++;
  }

  // Удаление питомца
  deletePet(petId: number) {
    this.pets = this.pets.filter((pet) => pet.id !== petId);
  }

  // Для trackBy в *ngFor
  trackById(index: number, item: Pet): number {
    return item.id;
  }
}
