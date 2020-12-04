import { Component, OnInit } from '@angular/core';

import { PostsService } from './../posts.service'

@Component({
  selector: 'app-delete-post',
  templateUrl: './delete-post.component.html',
  styleUrls: ['./delete-post.component.css']
})
export class DeletePostComponent{

  constructor(private postService: PostsService) { 

  }


  deletePost(postId: number){
    this.postService.deletePost(postId).subscribe(
      res=>{
        console.log(res);
      },
      err=>{
        console.log(err);
      }
    );
  }

}
