import { Component, signal } from '@angular/core';
import { JobSearch } from '../../../jobs/job-search/job-search';
import { MobileJobSearch } from '../../../jobs/job-search/mobile-job-search/mobile-job-search';
import { ModalDropdown } from '../../../shared/modal-dropdown/modal-dropdown';
import { InfoPod } from '../../../shared/info-pod/info-pod';
import { ProfileComplete } from '../../profile-complete/profile-complete';
import { LookingFor } from '../widgets/looking-for/looking-for';
import { Status } from '../widgets/status/status';
import { Experience } from '../widgets/experience/experience';
import { Cv } from '../widgets/cv/cv';
import { Qualifications } from '../widgets/qualifications/qualifications';
import { About } from '../../about/about';
import { featherSearch } from '@ng-icons/feather-icons';
import { NgIcon, provideIcons } from '@ng-icons/core';

@Component({
  selector: 'app-user-profile',
  imports: [
    ModalDropdown,
    InfoPod,
    ProfileComplete,
    About,
    NgIcon,
    LookingFor,
    Status,
    Experience,
    Cv,
    Qualifications,
    JobSearch,
    MobileJobSearch,
  ],
  viewProviders: [provideIcons({ featherSearch })],
  templateUrl: './user-profile.html',
})
export class UserProfile {
  isOpen = signal<boolean>(false);
}