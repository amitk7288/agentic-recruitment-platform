import { Component, signal } from '@angular/core';
import { CardSideScroll } from '../../shared/card-side-scroll/card-side-scroll';
import { JobCard } from '../../shared/job-card/job-card';

@Component({
  selector: 'app-saved-jobs',
  imports: [CardSideScroll, JobCard],
  templateUrl: './saved-jobs.html',
})
export class SavedJobs {
  savedJobs = signal([
    {
      jobId: 1,
      jobTitle: 'Software Engineer',
      employerName: 'Searchability',
      minimumSalary: 55000,
      maximumSalary: 70000,
      locationName: 'Warwick',
      date: '01/01/2024',
    },
  ]);

  formatDate(jobDate: string): string {
    if (!jobDate) return '';
    const [day, month, year] = jobDate.split('/');
    const date = new Date(`${year}-${month}-${day}`);
    return `${parseInt(day)} ${date.toLocaleDateString('en-GB', { month: 'short' })}`;
  }
}
