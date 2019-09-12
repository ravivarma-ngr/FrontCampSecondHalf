import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BodyComponent } from './components/main/body/body.component';

import { FormsModule } from '@angular/forms';
import { PostsService } from './services/posts.service';
import { MainHeaderComponent } from './components/main/body/main-header/main-header.component';
import { NewArticleComponent } from './components/main/new-article/new-article.component';

import { ReactiveFormsModule } from '@angular/forms';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { LoginComponent } from './components/login/login.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    MainHeaderComponent,
    NewArticleComponent,
    PostDetailsComponent,
    LoginComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
