import { Component, signal, input } from '@angular/core';
import {
  featherZap,
  featherHeart,
  featherClock,
  featherMapPin,
} from '@ng-icons/feather-icons';
import { remixMoneyPoundCircleLine } from '@ng-icons/remixicon';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-job-card',
  imports: [NgIcon, RouterLink],
  viewProviders: [
    provideIcons({
      featherZap,
      featherHeart,
      featherClock,
      featherMapPin,
      remixMoneyPoundCircleLine,
    }),
  ],
  templateUrl: './job-card.html',
})
export class JobCard {
  title = input<string>();
  date = input<string>();
  employer = input<string>();
  max = input<number>();
  min = input<number>();
  loc = input<string>();
  jobId = input<number>();
  job = input<any>();

  jobSaved = signal<boolean>(false);
  jobApplied = signal<boolean>(false);

  handleSaveClick() {
    console.log('clicked');
  }
  handleApplyClick() {
    console.log('clicked');
  }
}
