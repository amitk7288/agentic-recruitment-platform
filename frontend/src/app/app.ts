import { Component, inject, signal } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Header } from './shared/header/header';
import { Footer } from './shared/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);

  showFooter = signal(true);
  showHeader = signal(true);

  constructor() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        const data = this.activatedRoute.firstChild?.snapshot.data;
        this.showFooter.set(!data?.['hideFooter']);
        this.showHeader.set(!data?.['hideHeader']);
      });
  }
}
