import { Component, OnInit, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Posts } from '../../../classes/posts';
import { PostsService } from '../../../services/posts.service';
import { Router } from '@angular/router';
import { MainService } from '../../../services/main.service';
import { AlertComponent } from '../../shared/alert/alert.component';
import { PlaceholderDirective } from '../../shared/placeholder/placeholder.directive';
import { Subscription } from 'rxjs';

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

  @ViewChild(PlaceholderDirective, { static: false }) alertHost: PlaceholderDirective;

  private closeSub: Subscription;

  constructor(private router: Router, private mainService: MainService , private componentFactoryResolver: ComponentFactoryResolver ) { }

  ngOnInit() {
  }

  onSubmit() {
    console.warn(this.profileForm.value);
    this.mainService.insertPostData(this.profileForm.value);
    this.showAlert('Inserted !!');
    // this.router.navigate(['body', 'cnn']);
  }

  onCancel() {
    this.router.navigate(['body', 'cnn']);
  }

  private showAlert(message: string) {
    // const alertCmp = new AlertComponent();
    const alertCmpFactory = this.componentFactoryResolver.resolveComponentFactory(
      AlertComponent
    );
    const hostViewContainerRef = this.alertHost.viewContainerRef;
    hostViewContainerRef.clear();

    const componentRef = hostViewContainerRef.createComponent(alertCmpFactory);

    componentRef.instance.message = message;
    this.closeSub = componentRef.instance.close.subscribe(() => {
      this.router.navigate(['body', 'cnn']);
      this.closeSub.unsubscribe();
      hostViewContainerRef.clear();
    });
  }

}
