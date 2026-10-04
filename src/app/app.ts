import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { Home } from './home/home';
import { Blog } from './blog/blog';
import { Footer } from './footer/footer';
import { Navbar } from './navbar/navbar';
import { AboutUs } from './about-us/about-us';
import { NotFound } from './not-found/not-found';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, Blog, Footer, Navbar, AboutUs, NotFound],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('adasa-app');
  ngOnInit(): void {
    initFlowbite();
  }
}
