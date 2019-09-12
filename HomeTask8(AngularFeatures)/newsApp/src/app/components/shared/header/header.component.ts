import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  subscription: Subscription;
  userName: string ;
  constructor(private router: Router, private postsService: PostsService ,  private  authService: AuthService) { }

  ngOnInit() {
    this.subscription = this.postsService.getUserName().subscribe(name => {
      if (name) {
        this.userName = name;
      } else {
        this.userName = '';
      }
    });
  }

  login(): void {
    this.router.navigate(['login']);
  }

  logout(): void {
    this.userName = '';
    // localStorage.setItem('userName', '');
    this.authService.logout();
    // this.router.navigate(['login']);
  }
}
