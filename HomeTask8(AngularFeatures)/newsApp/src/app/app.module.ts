import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { BodyComponent } from './components/shared/body/body.component';

import { FormsModule } from '@angular/forms';
import { PostsService } from './services/posts.service';
import { MainHeaderComponent } from './components/shared/body/main-header/main-header.component';
import { NewArticleComponent } from './components/admin/new-article/new-article.component';

import { ReactiveFormsModule } from '@angular/forms';
import { PostDetailsComponent } from './components/user/post-details/post-details.component';
import { LoginComponent } from './components/shared/login/login.component';

import { HttpClientModule } from '@angular/common/http';
import { AdminRoutingModule } from './components/admin/admin-routing.module';
import { UserModule } from './components/user/user.module';
import { AdminModule } from './components/admin/admin.module';
import { AlertComponent } from './components/shared/alert/alert.component';
import { PlaceholderDirective } from './components/shared/placeholder/placeholder.directive';


import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';


  // Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyAm6AbwbP0D_KBIw1eXSBhgiLo1TG85Nls',
    authDomain: 'newsfeed-21cdd.firebaseapp.com',
    databaseURL: 'https://newsfeed-21cdd.firebaseio.com',
    projectId: 'newsfeed-21cdd',
    storageBucket: '',
    messagingSenderId: '650107796074',
    appId: '1:650107796074:web:08eaa482ded58b84'
  };


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    MainHeaderComponent,
    LoginComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    UserModule,
    AdminModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [PostsService],
  bootstrap: [AppComponent],
  entryComponents: [
    AlertComponent
  ]
})
export class AppModule { }
