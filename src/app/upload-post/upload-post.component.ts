import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { PostsService } from './../posts.service';

@Component({
  selector: 'app-upload-post',
  templateUrl: './upload-post.component.html',
  styleUrls: ['./upload-post.component.css']
})
export class UploadPostComponent {

  constructor(private postsServicio: PostsService) {

  }

  createPost(titulo, cuerpo, usuarioId){

    var newPost = {
      "title": titulo.value,
      "body": cuerpo.value,
      "userId": usuarioId.value
    };

    this.postsServicio.setPost(newPost).subscribe(
      res=>{
        console.log(res);
      },
      err=>{
        console.log(err);
      }
    );

    return false;
  }


}
