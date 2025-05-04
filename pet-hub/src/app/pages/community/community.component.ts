import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-community',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss'],
})
export class CommunityComponent {
  posts = [
    {
      author: 'Анна Петрова',
      title: 'Как приучить кота к лотку?',
      content:
        'У нас появился котёнок. Поделитесь опытом — как быстро приучить к лотку?',
      tags: ['кот', 'приучение', 'советы'],
    },
    {
      author: 'Игорь Сидоров',
      title: 'Вакцинация щенков — когда начинать?',
      content: 'Щенку 2 месяца. Когда нужно делать первую прививку и какую?',
      tags: ['вакцинация', 'щенок', 'здоровье'],
    },
    {
      author: 'Мария Алексеева',
      title: 'Лучшие игрушки для попугаев',
      content:
        'Посоветуйте, какие игрушки безопасны и интересны для волнистого попугая?',
      tags: ['попугай', 'игрушки', 'досуг'],
    },
  ];
}
