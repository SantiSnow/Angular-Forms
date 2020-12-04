import { Component, OnInit } from '@angular/core';

import { PostsService } from './../posts.service'

@Component({
  selector: 'app-delete-post',
  templateUrl: './delete-post.component.html',
  styleUrls: ['./delete-post.component.css']
})
export class DeletePostComponent{

  posts = [];

  constructor(private postService: PostsService) { 
    this.postService.getPosts().subscribe(data=>{
      this.posts = data;
      console.log(data);
    });
  }


  deletePost(postId: number){
    this.postService.deletePost(postId).subscribe(
      res=>{
        console.log("Recurso eliminado");
        console.log(res);
      },
      err=>{
        console.log(err);
      }
    );
  }

}
