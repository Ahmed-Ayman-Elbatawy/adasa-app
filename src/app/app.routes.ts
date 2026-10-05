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
  { path: 'home', component: Home, title: 'عدسة-عالم التصوير-الرئيسية' },
  { path: 'blog', component: Blog, title: 'عدسة-عالم التصوير-المدونة' },
  { path: 'blog/:slug', component: Article, title: 'عدسة-عالم التصوير-المقال' },
  { path: 'about', component: AboutUs, title: 'عدسة-عالم التصوير-من نحن' },
  { path: 'privacy', component: Privacy, title: 'عدسة-عالم التصوير-الخصوصية' },
  { path: 'terms', component: Terms, title: 'عدسة-عالم التصوير-الشروط والأحكام' },
  { path: 'notfound', component: NotFound, title: 'عدسة-عالم التصوير-الصفحة غير موجودة' },
  { path: '**', redirectTo: 'notfound' },
];
