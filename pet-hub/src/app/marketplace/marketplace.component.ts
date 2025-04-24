import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-marketplace-board',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.scss'],
})
export class MarketplaceComponent {
  products = [
    {
      name: 'Домик для кошки',
      description: 'Мягкий, удобный, как новый.',
      price: 1200,
      imageUrl: 'assets/img/product1.jpg',
    },
    {
      name: 'Лежанка для собаки',
      description: 'Размер XL. Практически не использовалась.',
      price: 2000,
      imageUrl: 'assets/img/product2.jpg',
    },
    {
      name: 'Аквариум 60л',
      description: 'Без трещин, с крышкой и подсветкой.',
      price: 3500,
      imageUrl: 'assets/img/product3.jpg',
    },
    // добавь ещё товары при желании
  ];
}
