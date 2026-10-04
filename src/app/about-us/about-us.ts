import { Component } from '@angular/core';
import { Post } from '../post';
import { posts, siteInfo } from '../posts';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about-us',
  imports: [RouterLink],
  templateUrl: './about-us.html',
  styleUrl: './about-us.css',
})
export class AboutUs {
  posts: Post[] = posts;
  authors: Post[] = posts.filter((post) => post.author);
  siteInfo = siteInfo;
}
