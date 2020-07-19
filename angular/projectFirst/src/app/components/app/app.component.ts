import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserModel} from '../../models/UserModel';
import {PostModel} from '../../models/PostModel';
import {CommentModel} from '../../models/CommentModel';

@Component({
  selector: 'app-root',
  template: `
    <app-user *ngFor="let userX of users" [user]="userX"></app-user>
    <app-post *ngFor="let postX of posts" [post]="postX"></app-post>
    <app-comment *ngFor="let commentX of comments" [comment]="commentX"></app-comment>
  `,
  styles: [``]
})

export class AppComponent {
  users: UserModel[];
  posts: PostModel[];
  comments: CommentModel[];
  constructor(private httpClient: HttpClient) {
    this.httpClient
      .get<UserModel[]>('http://jsonplaceholder.typicode.com/users')
      .subscribe(data => this.users = data);
    this.httpClient
      .get<PostModel[]>('http://jsonplaceholder.typicode.com/posts')
      .subscribe(data => this.posts = data);
    this.httpClient
      .get<CommentModel[]>('http://jsonplaceholder.typicode.com/comments')
      .subscribe(data => this.comments = data.slice(0, 100));
  }
}
