import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {Md5} from 'ts-md5/dist/md5';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  profileForm = new FormGroup({
    userName: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(private router: Router, private postsService: PostsService) { }

  ngOnInit() {
  }

  onSubmit() {
    const userName = this.profileForm.value.userName;
    const password = Md5.hashStr(this.profileForm.value.password);
    this.authenticate(userName, password);
    this.router.navigate(['body', 'cnn']);
  }

  authenticate(userName: string, password: string | Int32Array) {
    localStorage.setItem('userName', userName);
    this.postsService.setUserName(userName);
  }

  onCancel() {
    this.router.navigate(['body', 'cnn']);
  }

}
