import { Injectable } from '@angular/core';
import { Posts } from 'src/app/classes/posts';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  postsChanged = new Subject<Posts[]>();
  constructor() { }

  private postsData: Posts[] ;

  setPosts(posts: Posts[]) {
    this.postsData = posts;
    console.log(this.postsData);
    this.postsChanged.next(this.postsData);
  }

  getPosts() {
    return this.postsData;
  }

  getPostByID(id: string): Posts {
    console.log('here');
    console.log(this.postsData);
    return this.postsData[id];
  }

  insertPostData(post: any): void {
    this.postsData.push(post);
    console.log(this.postsData);
    this.postsChanged.next(this.postsData);
  }

}
