import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Blog } from './blog/blog';
import { AboutUs } from './about-us/about-us';
import { NotFound } from './not-found/not-found';
import { Article } from './article/article';
import { Privacy } from './privacy/privacy';
import { Terms } from './terms/terms';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'blog', component: Blog },
  { path: 'blog/:slug', component: Article },
  { path: 'about', component: AboutUs },
  { path: 'privacy', component: Privacy },
  { path: 'terms', component: Terms },
  { path: 'notfound', component: NotFound },
  { path: '**', redirectTo: 'notfound' },
];
