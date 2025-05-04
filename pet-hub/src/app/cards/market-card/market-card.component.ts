import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'product-card',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './market-card.component.html',
  styleUrl: './market-card.component.scss',
})
export class MarketCardComponent {
  @Input() product!: Product;
}

// Интерфейс для данных товара
export interface Product {
  title: string;
  description?: string;
  price: number;
  imageUrl: string;
}
