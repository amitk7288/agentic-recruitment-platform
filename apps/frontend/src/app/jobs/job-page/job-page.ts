import { Component, signal, inject } from '@angular/core';
import { Location } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { JobSearch } from '../job-search/job-search';
import { ModalDropdown } from '../../shared/modal-dropdown/modal-dropdown';
import { MobileJobSearch } from '../job-search/mobile-job-search/mobile-job-search';
import {
  featherZap,
  featherHeart,
  featherArrowLeftCircle,
  featherClock,
  featherMapPin,
} from '@ng-icons/feather-icons';
import { remixMoneyPoundCircleLine } from '@ng-icons/remixicon';
import { NgIcon, provideIcons } from '@ng-icons/core';

@Component({
  selector: 'app-job-page',
  imports: [JobSearch, ModalDropdown, MobileJobSearch, NgIcon],
  templateUrl: './job-page.html',
  viewProviders: [
    provideIcons({
      remixMoneyPoundCircleLine,
      featherClock,
      featherMapPin,
      featherArrowLeftCircle,
      featherZap,
      featherHeart,
    }),
  ],
})
export class JobPage {
  private location = inject(Location);
  private sanitizer = inject(DomSanitizer);

  isOpen = signal(false);
  jobSaved = signal(false);
  jobApplied = signal(false);

  // placeholder data — replace with real data from store/service
  jobTitle = signal('Software Developer');
  employerName = signal('Acme Corp');
  datePosted = signal('01/08/2026');
  locationName = signal('London');
  minimumSalary = signal('40000');
  maximumSalary = signal('60000');
  contractType = signal('Permanent');
  jobDescription = signal('<p>This is the job description.</p>');

  get sanitizedDescription(): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(this.jobDescription());
  }

  formatDate(jobDate: string): string {
    const [day, month, year] = jobDate.split('/');
    const date = new Date(`${year}-${month}-${day}`);
    return `${parseInt(day)} ${date.toLocaleDateString('en-GB', { month: 'short' })}`;
  }

  goBack() {
    this.location.back();
  }
}
