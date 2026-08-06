import { Component, inject, signal, computed } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  featherSearch,
  featherFilter,
  featherArrowRight,
  featherArrowLeft,
  featherArrowLeftCircle,
} from '@ng-icons/feather-icons';
import { MinPipe } from '../../shared/pipes/min-pipe-pipe';
import { JobCard } from '../../shared/job-card/job-card';
import { JobSearch } from '../job-search/job-search';
import { MobileJobSearch } from '../../jobs/job-search/mobile-job-search/mobile-job-search';
import { ModalDropdown } from '../../shared/modal-dropdown/modal-dropdown';

@Component({
  selector: 'app-job-results',
  imports: [
    JobCard,
    JobSearch,
    MobileJobSearch,
    ModalDropdown,
    NgIcon,
    MinPipe,
  ],
  viewProviders: [
    provideIcons({
      featherSearch,
      featherFilter,
      featherArrowRight,
      featherArrowLeft,
      featherArrowLeftCircle,
    }),
  ],
  templateUrl: './job-results.html',
})
export class JobResults {
  private location = inject(Location);
  private router = inject(Router);

  // placeholder — replace with store selectors
  filteredResults = signal<any[]>([]);
  keywords = signal('Developer');

  isOpen = signal(false);
  showFilter = signal(false);
  currentPage = signal(1);
  jobsPerPage = 10;

  startIndex = computed(() => (this.currentPage() - 1) * this.jobsPerPage);
  endIndex = computed(() => this.startIndex() + this.jobsPerPage);
  currentJobs = computed(() =>
    this.filteredResults().slice(this.startIndex(), this.endIndex()),
  );

  totalResults = computed(() => this.filteredResults().length);
  jobsLabel = computed(() => (this.totalResults() > 1 ? 'jobs' : 'job'));

  handleNextPage() {
    if (this.currentJobs().length === this.jobsPerPage) {
      this.currentPage.update((p) => p + 1);
    }
  }

  handlePreviousPage() {
    if (this.currentPage() > 1) {
      this.currentPage.update((p) => p - 1);
    }
  }

  toggleFilter(e: Event) {
    e.preventDefault();
    this.showFilter.update((prev) => !prev);
  }

  handleSalaryFilter(e: Event) {
    const value = Number((e.target as HTMLSelectElement).value);
    console.log('salary filter:', value);
    // dispatch salary filter action
  }

  handleDateFilter(e: Event) {
    const value = (e.target as HTMLSelectElement).value;
    console.log('date filter:', value);
    // dispatch date filter action
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
