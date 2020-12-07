import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) {

  }

  getSinglePost(postId){
    return this.http.get('https://jsonplaceholder.typicode.com/posts/' + postId);
  }

  getPosts(){
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }

  setPost(post){
    return this.http.post('https://jsonplaceholder.typicode.com/posts', post);
  }

  deletePost(postId){
    return this.http.delete('https://jsonplaceholder.typicode.com/posts/' + postId);
  }

  updatePost(post){
    return this.http.put('https://jsonplaceholder.typicode.com/posts/' + post.id, post);
  }
}
