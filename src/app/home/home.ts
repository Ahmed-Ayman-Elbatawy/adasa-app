import { Component } from '@angular/core';
import { Footer } from '../footer/footer';
import { Navbar } from '../navbar/navbar';
import { Post } from '../post';
import { Category } from '../category';
import { SiteInfo } from '../site-info';
import { posts, categories, siteInfo } from '../posts';
import { RouterLink } from '@angular/router';
import { NgClass } from '../../../node_modules/@angular/common/types/_common_module-chunk';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  Myposts: Post[] = posts;
  authors: Post[] = posts.filter((post) => post.author).slice(0, 3);
  categories: Category[] = categories;
  siteInfo: SiteInfo = siteInfo;
  latestPosts: Post[] = posts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);
}
