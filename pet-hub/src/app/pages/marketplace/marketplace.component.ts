import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketCardComponent } from '../../cards/market-card/market-card.component';

@Component({
  selector: 'app-marketplace-board',
  standalone: true,
  imports: [CommonModule, MarketCardComponent],
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.scss'],
})
export class MarketplaceComponent {
  products = [
    {
      title: 'Домик для кошки',
      description: 'Мягкий, удобный, как новый.',
      price: 1200,
      imageUrl: 'assets/img/catHouse.jpg',
    },
    {
      title: 'Лежанка для собаки',
      description: 'Размер XL. Практически не использовалась.',
      price: 2000,
      imageUrl: 'assets/img/dogBed.jpg',
    },
    {
      title: 'Аквариум 60л',
      description: 'Без трещин, с крышкой и подсветкой.',
      price: 3500,
      imageUrl: 'assets/img/fishHouse.jpg',
    },
    {
      title: 'Аквариум 60л',
      description: 'Без трещин, с крышкой и подсветкой.',
      price: 3500,
      imageUrl: 'assets/img/fishHouse.jpg',
    },
    {
      title: 'Домик для кошки',
      description: 'Мягкий, удобный, как новый.',
      price: 1200,
      imageUrl: 'assets/img/catHouse.jpg',
    },
    // добавь ещё товары при желании
  ];
}
