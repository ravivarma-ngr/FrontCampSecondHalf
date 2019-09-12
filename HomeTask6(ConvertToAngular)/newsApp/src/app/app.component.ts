import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from './services/posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'newsApp';
  postData: any;
  // tslint:disable-next-line: no-inferrable-types
  showHead: boolean = true;
  constructor(private router: Router ,  private postsService: PostsService ) {
      this.postsService.fetchCall('cnn');
    }
  }
