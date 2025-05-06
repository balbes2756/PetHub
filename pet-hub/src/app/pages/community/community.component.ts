import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Comment {
  author: string;
  text: string;
  date?: Date;
}

interface Post {
  author: string;
  title: string;
  content: string;
  tags: string[];
  comments?: Comment[];
  newCommentText?: string;
}

@Component({
  selector: 'app-community',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss'],
})
export class CommunityComponent {
  newPostTitle = '';
  newPostContent = '';
  newPostTags = '';

  posts: Post[] = [
    {
      author: 'Анна Петрова',
      title: 'Как приучить кота к лотку?',
      content:
        'У нас появился котёнок. Поделитесь опытом — как быстро приучить к лотку?',
      tags: ['кот', 'приучение', 'советы'],
      comments: [],
      newCommentText: '',
    },
    {
      author: 'Игорь Сидоров',
      title: 'Вакцинация щенков — когда начинать?',
      content: 'Щенку 2 месяца. Когда нужно делать первую прививку и какую?',
      tags: ['вакцинация', 'щенок', 'здоровье'],
      comments: [],
      newCommentText: '',
    },
    {
      author: 'Мария Алексеева',
      title: 'Лучшие игрушки для попугаев',
      content:
        'Посоветуйте, какие игрушки безопасны и интересны для волнистого попугая?',
      tags: ['попугай', 'игрушки', 'досуг'],
      comments: [],
      newCommentText: '',
    },
  ];

  createPost() {
    if (!this.newPostTitle || !this.newPostContent) return;

    const tags = this.newPostTags
      .split(',')
      .map((tag) => tag.trim())
      .filter(Boolean);

    const newPost: Post = {
      author: 'Вы',
      title: this.newPostTitle,
      content: this.newPostContent,
      tags: tags,
      comments: [],
      newCommentText: '',
    };

    this.posts.unshift(newPost);

    // Очистка формы
    this.newPostTitle = '';
    this.newPostContent = '';
    this.newPostTags = '';
  }

  addComment(post: Post) {
    if (!post.newCommentText?.trim()) return;

    const newComment = {
      author: 'Вы',
      text: post.newCommentText,
      date: new Date(),
    };

    if (!post.comments) {
      post.comments = [];
    }

    post.comments.push(newComment);
    post.newCommentText = '';
  }
}
