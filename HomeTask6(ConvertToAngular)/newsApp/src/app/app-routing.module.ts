import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewArticleComponent } from './components/main/new-article/new-article.component';
import { BodyComponent } from './components/main/body/body.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  { path: '', redirectTo: '/body/cnn', pathMatch: 'full' },
  { path: 'body/:src', component: BodyComponent },
  { path: 'NewArticle', component: NewArticleComponent },
  { path: 'postDetails/:id', component: PostDetailsComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
