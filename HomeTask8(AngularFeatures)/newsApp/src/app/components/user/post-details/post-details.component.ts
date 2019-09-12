import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Posts } from '../../../classes/posts';
import { PostsService } from '../../../services/posts.service';
import { MainService } from '../../../services/main.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  data: Posts ;
  id: number;
  constructor(private route: ActivatedRoute, private mainService: MainService) { }

  ngOnInit() {
    this.route.params.subscribe(routeParams => {
      console.log(routeParams);
      this.setData(routeParams.id);
    });
  }

  setData(id: number) {
  this.id = id;
  this.data = this.mainService.getPostByID(id);
  }

  onSubmitComment(comment: string) {
    console.log('Writing....');
    this.mainService.writeComments(comment, this.id);
    console.log(this.data.comments);
  }
}
