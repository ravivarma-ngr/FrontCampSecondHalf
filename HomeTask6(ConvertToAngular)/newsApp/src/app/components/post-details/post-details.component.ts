import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Posts } from '../../classes/posts';
import { PostsService } from '../../services/posts.service';
import { MainService } from '../main/main.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  data: Posts ;
  constructor(private route: ActivatedRoute, private mainService: MainService) { }

  ngOnInit() {
    this.route.params.subscribe(routeParams => {
      console.log(routeParams);
      this.setData(routeParams.id);
    });
  }

  setData(id: string) {
   this.data = this.mainService.getPostByID(id);
  }

}
