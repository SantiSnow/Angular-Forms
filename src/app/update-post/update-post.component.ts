import { Component, OnInit } from '@angular/core';

import { Post } from './../post';
import { PostsService } from './../posts.service';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent {

  posts = [];

  constructor(private postService: PostsService) { 
    this.postService.getPosts().subscribe(data=>{
      this.posts = data;
      console.log(data);
    });
  }


  updatePost(post: Post){
    this.postService.updatePost(post).subscribe(
      res=>{
        console.log(res);
      },
      err=>{
        console.log(err);
      }
    );
  }

}
