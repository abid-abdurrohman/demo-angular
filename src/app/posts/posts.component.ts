import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { AppError } from '../common/app-error';
import { BadInput } from '../common/bad-input';
import { NotFoundError } from '../common/not-found-error';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[];
  posts2: any[];

  constructor(private service: PostService) {
  }

  ngOnInit() {
    this.service.getAll()
      .subscribe(posts => this.posts = posts);
    
    this.service.getAll2()
      .subscribe(posts => this.posts2 = posts);
  }

  // createPost(input: HTMLInputElement) {
  //   let post = {
  //     title: input.value
  //   }

  //   this.service.create(post)
  //     .subscribe(newPost => {
  //       this.posts.splice(0,0,newPost);
  //     }, 
  //     (error: AppError) => {
  //       if (error instanceof BadInput){
  //         // this.form.setErrors(error.originalError);
  //       } else {
  //         throw error;
  //       }
  //     });
  // }

  // updatePost(input: HTMLInputElement,post) {
  //   post.title = input.value;

  //   this.service.update(post)
  //     .subscribe(updatedPost => {
  //       let index = this.posts.indexOf(post);
  //       this.posts.splice(index,1,updatedPost.json());
  //     });
  // }

  // deletePost(post) {
  //   this.service.delete(post.id)
  //     .subscribe(
  //       () => {
  //       let index = this.posts.indexOf(post);
  //       this.posts.splice(index,1);
  //     }, 
  //     (error: AppError) => {
  //       if (error instanceof NotFoundError){
  //         alert('This post has already been deleted.');
  //       } else {
  //         alert('An unexpected error occurred.');
  //         console.log(error)
  //       }
  //     });
  // }
}
