import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { posts } from '../posts';
import { Post } from '../post';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './article.html',
})
export class Article implements OnInit {
  private route = inject(ActivatedRoute);

  myPosts: Post[] = posts;
  article: Post | undefined;
  sections: { title: string; body: string }[] = [];
  headings: any[] = [];
  content: string[] = [];
  related: Post[] = [];

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const slug = params.get('slug');
      this.article = this.myPosts.find((post) => post.slug === slug);

      this.sections = [];
      this.content = this.article?.content.split('## ') || [];
      this.sections.push({ title: '', body: this.content[0] });

      for (let i = 1; i < this.content.length; i++) {
        const piece = this.content[i].split('\n\n');
        this.sections.push({ title: piece[0], body: piece[1] });
      }

      this.headings = this.sections.slice(1);
      this.related = this.myPosts.filter((p) => p.category === this.article?.category).slice(0, 3);
    });
  }

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
