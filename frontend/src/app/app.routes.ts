import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './user/about/about';
import { UserProfile } from './user/profile/user-profile/user-profile'
import { ErrorPage } from './shared/error-page/error-page';
import { authGuard } from '../app/guards/auth-guard';

@Component({
  selector: 'app-courses',
  template: '<p>Courses page</p>',
})
class Courses {}

@Component({
  selector: 'app-career-advice',
  template: '<p>Career Advice page</p>',
})
class CareerAdvice {}

export const appRoutes: Routes = [
  { path: '', component: Home },
  { path: 'courses', component: Courses },
  { path: 'career-advice', component: CareerAdvice },
  { path: 'user/about', component: About },
  {path: 'test/profile', component: UserProfile},
  {
    path: 'profile',
    canActivate: [authGuard],
    redirectTo: '', // temporary until ProfileComponent is ready
  },
  {
    path: 'login',
    redirectTo: '', // temporary until LoginComponent is ready
  },
  {
    path: '**',
    component: ErrorPage,
    data: { hideFooter: true, hideHeader: true },
  },
];