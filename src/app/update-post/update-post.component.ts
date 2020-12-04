import { Component, OnInit } from '@angular/core';

import { Post } from './../post';
import { PostsService } from './../posts.service';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent {

  constructor(private postService: PostsService) { }


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
