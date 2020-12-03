import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) {

  }

  getPosts(){
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }

  setPost(post){
    return this.http.post('https://jsonplaceholder.typicode.com/posts', post);
  }
}
