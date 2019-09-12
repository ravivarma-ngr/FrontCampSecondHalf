import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {Md5} from 'ts-md5/dist/md5';
import { PostsService } from 'src/app/services/posts.service';
import { MainService } from '../../../services/main.service';
import { AuthService } from 'src/app/services/auth/auth.service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // profileForm = new FormGroup({
  //   userName: new FormControl('', Validators.required),
  //   password: new FormControl('', Validators.required),
  // });
  model: any = {};

  constructor(private router: Router, private postsService: PostsService ,
              private mainService: MainService , private  authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.model);
    const userName = this.model.userName;
    // const password = Md5.hashStr(this.model.password);
    const password = this.model.password;
    this.authenticate(userName, password);
    // this.router.navigate(['body', 'cnn']);
  }

  authenticate(userName: string, password: string ) {
    if ( userName === 'admin@gmail.com') {
        this.mainService.setLoginInfo(true);
    } else {
      this.mainService.setLoginInfo(false);
    }
    console.log('calling....');
    this.authService.login(userName, password);
    // localStorage.setItem('userName', userName);
  }

  onCancel() {
    this.router.navigate(['body', 'cnn']);
  }

}
