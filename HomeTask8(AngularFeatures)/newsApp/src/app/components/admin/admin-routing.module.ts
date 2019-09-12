import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from '../shared/body/body.component';
import { NewArticleComponent } from './new-article/new-article.component';
import { AdminGuard } from 'src/app/guards/admin.guard';

const routes: Routes = [
  { path: '', redirectTo: '/body/cnn', pathMatch: 'full' },
  { path: 'body/:src', component: BodyComponent },
  { path: 'NewArticle', component: NewArticleComponent , canActivate: [AdminGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
