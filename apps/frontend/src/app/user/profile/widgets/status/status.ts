import { Component, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { featherEdit } from '@ng-icons/feather-icons';
import { InfoPod } from '../../../../shared/info-pod/info-pod';
import { InfoText } from '../../../../shared/info-text/info-text';
import { StatusModal } from '../modal-content/status-modal/status-modal';

@Component({
  selector: 'app-status',
  imports: [InfoPod, InfoText, StatusModal, NgIcon],
  templateUrl: './status.html',
  viewProviders: [provideIcons({ featherEdit })],
})
export class Status {
  employmentStatus = signal<string | null>(null);
  noticePeriod = signal<string | null>(null);
  workEligibility = signal<boolean | null>(null);
}
