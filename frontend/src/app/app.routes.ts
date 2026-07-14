import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Home } from './home/home';

@Component({ template: '<p>Courses page</p>' })
class Courses {}

@Component({ template: '<p>Career Advice page</p>' })
class CareerAdvice {}

export const appRoutes: Routes = [
  { path: '', component: Home },
  { path: 'courses', component: Courses },
  { path: 'career-advice', component: CareerAdvice },
  { path: '**', redirectTo: '' },
];

