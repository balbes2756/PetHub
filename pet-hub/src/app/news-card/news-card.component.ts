// announcement-card.component.ts
import {
  Component,
  Input,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'news-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news-card.component.html',
  styleUrl: './news-card.component.scss',
})
export class AnnouncementCardComponent {
  @Input() item: any; // Объект с данными объявления (imageUrl, title, description)
  isModalOpen = false;

  @ViewChild('modalImage') modalImage!: ElementRef; // Ссылка на изображение в модальном окне

  // Открытие модального окна
  openModal(): void {
    this.isModalOpen = true;
  }

  // Закрытие модального окна
  closeModal(): void {
    this.isModalOpen = false;
  }

  ngAfterViewInit(): void {
    // Если нужно выполнить дополнительные действия после загрузки изображения
  }
}
