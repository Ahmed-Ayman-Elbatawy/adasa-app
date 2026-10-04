import { Component, inject, OnInit } from '@angular/core';
import { posts, categories } from '../posts';
import { NgClass } from '../../../node_modules/@angular/common/types/_common_module-chunk';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Post } from '../post';

@Component({
  selector: 'app-blog',
  imports: [RouterLink],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})
export class Blog implements OnInit {
  private route = inject(ActivatedRoute);

  Myposts = posts;
  categories = categories;
  showedPosts: Post[] = this.Myposts;
  isAllArticles: boolean = true;
  activeCategory: string = 'All';

  filteredPosts(searchTerm: string) {
    if (searchTerm !== '') {
      this.showedPosts = this.Myposts.filter(
        (post) =>
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()),
      );
      this.isAllArticles = false;
      this.activeCategory = searchTerm;
    } else {
      this.showedPosts = this.Myposts;
      this.isAllArticles = true;
      this.activeCategory = 'All';
    }
  }

  filterByCategory(searchTerm: string): void {
    this.showedPosts = this.Myposts.filter((post) =>
      post.category.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    if (searchTerm === 'All') {
      this.showedPosts = this.Myposts;
      this.isAllArticles = true;
      this.activeCategory = 'All';
    } else {
      this.isAllArticles = false;
      this.activeCategory = searchTerm;
    }
  }

  currentPage: number = 1;
  itemsPerPage: number = 6;

  get paginatedPosts() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.showedPosts.slice(startIndex, endIndex);
  }

  numberOfPages() {
    return Math.ceil(this.showedPosts.length / this.itemsPerPage);
  }

  get items() {
    return Array.from({ length: this.numberOfPages() }, (_, i) => i + 1);
  }

  goToPage(page: number) {
    this.currentPage = page;
  }

  goToNextPage() {
    if (this.currentPage < this.numberOfPages()) {
      this.currentPage++;
    }
  }

  goToPreviousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  viewMode = 'grid';

  setView(mode: string) {
    this.viewMode = mode;
  }

  ngOnInit() {
    this.route.queryParamMap.subscribe((params) => {
      const category = params.get('category');

      if (category) {
        this.filterByCategory(category);
      } else {
        this.filterByCategory('All');
      }
    });
  }
}
