import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { featherChevronDown } from '@ng-icons/feather-icons';
import { Button } from '../../shared/button/button';

@Component({
  selector: 'app-trending',
  imports: [Button, NgIcon],
  templateUrl: './trending.html',
  viewProviders: [provideIcons({ featherChevronDown })],
})
export class Trending {
  private router = inject(Router);

  handleClick(sector: string) {
    this.router.navigate(['/search'], {
      queryParams: { keywords: sector, location: 'london' },
    });
  }

  trendingJobs = [
    { label: 'Work from home jobs', value: 'work from home' },
    { label: 'Immediate start jobs', value: 'immediate start' },
    { label: 'Manager jobs', value: 'manager' },
    { label: 'Finance jobs', value: 'finance' },
    { label: 'Warehouse jobs', value: 'warehouse' },
    { label: 'Accountant jobs', value: 'accountant' },
    { label: 'Administrator jobs', value: 'administrator' },
    { label: 'Part time jobs', value: 'part time' },
    { label: 'Receptionist jobs', value: 'receptionist' },
    { label: 'Customer service jobs', value: 'customer service' },
    { label: 'Data entry jobs', value: 'data entry' },
    { label: 'Graduate jobs', value: 'graduate' },
  ];
}
