import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Posts } from '../../../classes/posts';
import { PostsService } from '../../../services/posts.service';
import { Router } from '@angular/router';
import { MainService } from '../main.service';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.css']
})
export class NewArticleComponent implements OnInit {


  profileForm = new FormGroup({
    title: new FormControl('', Validators.required),
    publishedAt: new FormControl('', Validators.required),
    author: new FormControl('', Validators.required),
    urlToImage: new FormControl('', Validators.required),
    description: new FormControl('', [Validators.required , Validators.minLength(100)]),
  });

  constructor(private router: Router, private mainService: MainService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.warn(this.profileForm.value);
    this.mainService.insertPostData(this.profileForm.value);
    this.router.navigate(['body', 'cnn']);
  }

  onCancel() {
    this.router.navigate(['body', 'cnn']);
  }

}
