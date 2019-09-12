import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { PostsService } from 'src/app/services/posts.service';
import { AppComponent } from 'src/app/app.component';
import { UserRoutingModule } from './user-routing.module';
import { BodyComponent } from '../shared/body/body.component';
import { PostDetailsComponent } from './post-details/post-details.component';


@NgModule({
  declarations: [
    PostDetailsComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    UserRoutingModule
  ],
  // providers: [PostsService],
  // bootstrap: [AppComponent]
})
export class UserModule { }
