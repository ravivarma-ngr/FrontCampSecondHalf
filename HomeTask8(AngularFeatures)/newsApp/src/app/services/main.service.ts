import { Injectable } from '@angular/core';
import { Posts } from 'src/app/classes/posts';
import { Subject } from 'rxjs';
import { sample } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  postsChanged = new Subject<Posts[]>();
  // tslint:disable-next-line: no-inferrable-types
  adminLogedIn: boolean = false;

  constructor() { }

  private postsData: Posts[] ;

  setPosts(posts: Posts[]) {
    this.postsData = posts;
    console.log(this.postsData);
    this.postsChanged.next(this.postsData);
  }

  setLoginInfo(status: boolean) {
    this.adminLogedIn = status;
  }

  getPosts() {
    return this.postsData;
  }

  getPostByID(id: number): Posts {
    console.log('here');
    console.log(this.postsData[id]);
    return this.postsData[id];
  }

  insertPostData(post: any): void {
    this.postsData.push(post);
    console.log(this.postsData);
    this.postsChanged.next(this.postsData);
  }

  loginFlag() {
    return this.adminLogedIn;
  }

  writeComments(comment: string, id: number) {
    this.postsData[id].comments.push(comment);
  }

  getComments(id: number) {
    return this.postsData[id].comments;
  }
}
