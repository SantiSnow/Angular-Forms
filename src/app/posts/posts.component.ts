import { Component, OnInit } from '@angular/core';
import { PostsService } from './../posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent{

  constructor(private postsServicio: PostsService) {
    this.postsServicio.getPosts().subscribe(data =>{
      this.posts = data;
      console.log(data);
    });
  }

  posts = [];

}
