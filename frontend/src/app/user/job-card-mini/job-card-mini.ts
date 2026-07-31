import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { featherHeart, featherClock, featherMapPin } from '@ng-icons/feather-icons';
import { remixMoneyPoundCircleLine } from '@ng-icons/remixicon';

@Component({
  selector: 'app-job-card-mini',
  imports: [NgIcon, RouterLink],
  templateUrl: './job-card-mini.html',
  viewProviders: [
    provideIcons({
      featherHeart,
      featherClock,
      featherMapPin,
      remixMoneyPoundCircleLine,
    }),
  ],
})
export class JobCardMini {
  title = input<string>('');
}

