import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './user/about/about';
import { UserProfile } from './user/profile/user-profile/user-profile'
import { JobPage } from './jobs/job-page/job-page';
import { JobResults } from './jobs/job-results/job-results';
import { UserHome } from './user/user-home/user-home';
import { UserLogin } from './auth/user-login/user-login';
import { UserRegister } from './auth/user-register/user-register';

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
  { path: 'test/profile', component: UserProfile },
  { path: 'jobpage', component: JobPage },
  { path: 'jobresults', component: JobResults },
  { path: 'user/home', component: UserHome },
  { path: 'login', component: UserLogin },
  { path: 'register', component: UserRegister },
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