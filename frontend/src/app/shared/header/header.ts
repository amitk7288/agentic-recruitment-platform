import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { Button } from '../button/button';
import {
  featherSearch,
  featherMenu,
  featherHeart,
} from '@ng-icons/feather-icons';

@Component({
  selector: 'app-header',
  imports: [NgIcon, RouterLink, RouterLinkActive, Button],
  templateUrl: './header.html',
  viewProviders: [
    provideIcons({
      featherMenu,
      featherSearch,
      featherHeart,
    }),
  ],
})
export class Header {
  isMobMenuOpen = signal(false);
  userInfo = signal(false);

  toggleMobMenu() {
    this.isMobMenuOpen.update((open) => !open);
  }

  goToRecruiter() {
    console.log('Recruiter clicked');
  }

  viewSavedJobs() {
    console.log('saved jobs clicked');
    
  }
}
