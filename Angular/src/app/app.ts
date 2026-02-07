import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Categories } from './components/categories/categories';
import { Navbar } from './components/navbar/navbar';
import { Carousel } from './components/carousel/carousel';
import { Footer } from './components/footer/footer';
import { Body } from './components/body/body';

@Component({
  selector: 'app-root',
  imports: [Navbar, Categories, Carousel, Footer, Body],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Angular');
}
