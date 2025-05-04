import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnouncementCardComponent } from '../../cards/news-card/news-card.component';

@Component({
  selector: 'app-announcements',
  standalone: true,
  imports: [CommonModule, AnnouncementCardComponent],
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.scss'],
})
export class AnnouncementsComponent {
  announcements = [
    {
      title: 'Пропал кот',
      description: 'Белый пушистый кот, откликается на Мурзик.',
      imageUrl: 'assets/img/pet_1.jpg',
    },
    {
      title: 'Отдам щенка',
      description: 'Маленький, игривый. Очень добрый! Порода — метис.',
      imageUrl: 'assets/img/pet_2.jpg',
    },
    {
      title: 'Продам клетку',
      description: 'Для грызунов. Почти новая.',
      imageUrl: 'assets/img/pet_3.jpg',
    },
    {
      title: 'Продам клетку',
      description: 'Для грызунов. Почти новая.',
      imageUrl: 'assets/img/pet_3.jpg',
    },
    {
      title: 'Отдам щенка',
      description: 'Маленький, игривый. Очень добрый! Порода — метис.',
      imageUrl: 'assets/img/pet_4.jpg',
    },
    {
      title: 'Продам клетку',
      description: 'Для грызунов. Почти новая.',
      imageUrl: 'assets/img/pet_3.jpg',
    },
    {
      title: 'Продам клетку',
      description:
        'Для грызунов. Почти новая. Для грызунов. Почти новая. Для грызунов. Почти новая. Для грызунов. Почти новая.',
      imageUrl: 'assets/img/pet_3.jpg',
    },
    {
      title: 'Отдам щенка',
      description: 'Маленький, игривый. Очень добрый! Порода — метис.',
      imageUrl: 'assets/img/pet_2.jpg',
    },
    {
      title: 'Продам клетку',
      description: 'Для грызунов. Почти новая.',
      imageUrl: 'assets/img/pet_4.jpg',
    },
    {
      title: 'Продам клетку',
      description: 'Для грызунов. Почти новая.',
      imageUrl: 'assets/img/pet_3.jpg',
    },
    // добавь больше для теста
  ];
}
