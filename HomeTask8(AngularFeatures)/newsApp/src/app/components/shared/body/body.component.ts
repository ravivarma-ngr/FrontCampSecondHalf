import { Component, OnInit, Input } from '@angular/core';

import { Posts } from '../../../classes/posts';
import { PostsService } from '../../../services/posts.service';

import { Subscription } from 'rxjs';
import { MainService } from '../../../services/main.service';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  // tslint:disable-next-line: ban-types
  allPosts: object;
  selectedSource: string;
  subscription: Subscription;

  constructor(private postsService: PostsService, private mainService: MainService ) { }

  ngOnInit() {
    this.postsService.fetchCall('cnn');
    this.subscription = this.mainService.postsChanged
      .subscribe(
        (posts: Posts[]) => {
          this.allPosts = posts;
        }
      );
    this.allPosts = this.mainService.getPosts();
    // this.setPostsData('cnn');
  }



  setPostsData(source: string): void {
    this.postsService.fetchCall(source);
  }

  changeOfSource(source: string) {
    this.setPostsData(source);
  }

}
