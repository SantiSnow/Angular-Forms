import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';

import { PostsService } from './posts.service';

import { HttpClientModule } from '@angular/common/http';
import { UploadPostComponent } from './upload-post/upload-post.component';
import { UpdatePostComponent } from './update-post/update-post.component';
import { DeletePostComponent } from './delete-post/delete-post.component';

const routes: Route[] = [
  { path: '', component: HomeComponent},
  { path: 'about-us', component: AboutUsComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'posts', component: PostsComponent},
  { path: 'create-post', component: UploadPostComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    ContactComponent,
    RegisterComponent,
    HomeComponent,
    PostsComponent,
    UploadPostComponent,
    UpdatePostComponent,
    DeletePostComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [
    PostsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
