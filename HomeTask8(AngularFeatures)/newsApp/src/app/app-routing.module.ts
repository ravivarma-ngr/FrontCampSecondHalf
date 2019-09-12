import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewArticleComponent } from './components/admin/new-article/new-article.component';
import { BodyComponent } from './components/shared/body/body.component';
import { PostDetailsComponent } from './components/user/post-details/post-details.component';
import { LoginComponent } from './components/shared/login/login.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  // { path: 'body/:src', component: BodyComponent },
  // { path: 'NewArticle', component: NewArticleComponent },
  // { path: 'postDetails/:id', component: PostDetailsComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'admin',
    loadChildren: './components/admin/admin.module#AdminModule'
  },
  {
    path: 'user',
    loadChildren: './components/user/user.module#UserModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
