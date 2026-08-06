import { Component } from '@angular/core';
import { CardSideScroll } from '../../shared/card-side-scroll/card-side-scroll';
import { JobCard } from '../../shared/job-card/job-card';

@Component({
  selector: 'app-applied-jobs',
  imports: [CardSideScroll, JobCard],
  templateUrl: './applied-jobs.html',
})
export class AppliedJobs {
  appliedJobs: any[] = [
    {
      title: 'Senior Frontend Engineer',
      date: '2026-07-25',
      employer: 'Sky',
      max: 90000,
      min: 75000,
      loc: 'London (Hybrid)',
      jobId: 'SFE-001',
      job: {
        description:
          'Lead development of customer-facing applications using React, TypeScript, and modern frontend tooling. Work closely with product and design teams to deliver high-performance, accessible interfaces.',
        responsibilities: [
          'Architect and build scalable React applications',
          'Lead code reviews and mentor mid-level developers',
          'Implement performance optimisation and accessibility best practices',
          'Collaborate with backend teams on API design',
        ],
        skills: [
          'React',
          'TypeScript',
          'Next.js',
          'Redux Toolkit',
          'Jest',
          'Cypress',
          'GraphQL',
          'REST APIs',
        ],
        benefits: [
          'Private healthcare',
          'Annual bonus',
          'Flexible hybrid working',
          '£2,000 personal learning budget',
        ],
      },
    },
    {
      title: 'Senior Frontend Developer',
      date: '2026-07-25',
      employer: 'BT Digital',
      max: 88000,
      min: 72000,
      loc: 'Birmingham (Hybrid)',
      jobId: 'SFD-002',
      job: {
        description:
          'Join BT Digital’s core engineering team to build enterprise-scale Angular applications using Nx, Signals, and micro-frontend architecture.',
        responsibilities: [
          'Develop and maintain Angular applications using best practices',
          'Implement scalable monorepo architecture with Nx',
          'Collaborate with UX teams to deliver pixel-perfect UI',
          'Drive adoption of Signals-based state management',
        ],
        skills: [
          'Angular 17+',
          'Signals',
          'RxJS',
          'Nx',
          'Tailwind',
          'Jest',
          'Playwright',
          'REST + GraphQL',
        ],
        benefits: [
          '11% employer pension contribution',
          'Hybrid working (2 days onsite)',
          'Annual bonus scheme',
          'Enhanced parental leave',
        ],
      },
    },
    {
      title: 'Senior Frontend Engineer (AI UI)',
      date: '2026-07-25',
      employer: 'Monzo',
      max: 95000,
      min: 80000,
      loc: 'Remote (UK)',
      jobId: 'SFE-003',
      job: {
        description:
          'Build next-generation AI-assisted customer interfaces using React, TypeScript, and LLM-driven UI components. Work in a fast-paced fintech environment with strong engineering culture.',
        responsibilities: [
          'Develop AI-assisted UI flows using LLM APIs',
          'Implement semantic search and natural language UX',
          'Collaborate with backend teams on event-driven architecture',
          'Ensure high accessibility and performance standards',
        ],
        skills: [
          'React',
          'TypeScript',
          'Next.js',
          'Tailwind',
          'Zustand',
          'TanStack Query',
          'AI/LLM API integration',
          'Event-driven architecture',
        ],
        benefits: [
          'Fully remote',
          'Stock options',
          '£1,500 yearly home-office budget',
          'Private medical insurance',
        ],
      },
    },
  ];

  formatDate(jobDate: string): string {
    if (jobDate) {
      const [year, month, day] = jobDate.split('-');
      const date = new Date(`${year}-${month}-${day}`);
      return `${parseInt(day)} ${date.toLocaleDateString('en-GB', { month: 'short' })}`;
    } else {
      console.log('no job date');
      return '';
    }
  }
}
