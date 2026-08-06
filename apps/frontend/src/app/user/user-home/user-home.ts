import { Component, signal } from '@angular/core';
import { InfoPod } from '../../shared/info-pod/info-pod';
import { ModalDropdown } from '../../shared/modal-dropdown/modal-dropdown';
import { JobSearch } from '../../jobs/job-search/job-search';
import { MobileJobSearch } from '../../jobs/job-search/mobile-job-search/mobile-job-search';
import { CardList } from '../../shared/card-list/card-list';
import { About } from '../about/about';
import { SavedJobs } from '../saved-jobs/saved-jobs';
import { ProfileComplete } from '../profile-complete/profile-complete';
import { AppliedJobs } from '../applied-jobs/applied-jobs';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { featherSearch } from '@ng-icons/feather-icons';

@Component({
  selector: 'app-user-home',
  imports: [
    InfoPod,
    ModalDropdown,
    MobileJobSearch,
    CardList,
    About,
    SavedJobs,
    JobSearch,
    NgIcon,
    ProfileComplete,
    AppliedJobs,
  ],
  templateUrl: './user-home.html',
  viewProviders: [provideIcons({ featherSearch })],
})
export class UserHome {
  //store
  isOpen = signal<boolean>(false);
  savedJobs = signal(['']);
  appliedJobs = signal(['']);
}
