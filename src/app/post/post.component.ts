import { Component, OnInit } from '@angular/core';

import { PostsService } from './../posts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent{

  post;
  postId;

  constructor(private postService: PostsService, private _route: ActivatedRoute) { 
    
    this.postId = this._route.snapshot.paramMap.get('id');
    
    this.postService.getSinglePost(this.postId).subscribe(data=>{
      this.post = data;
    });
  }


}
