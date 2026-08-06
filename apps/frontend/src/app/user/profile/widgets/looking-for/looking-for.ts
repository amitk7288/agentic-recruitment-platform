import { Component, signal } from '@angular/core';
import { InfoPod } from '../../../../shared/info-pod/info-pod';
import { InfoText } from '../../../../shared/info-text/info-text';
import { LookingForModal } from '../modal-content/looking-for-modal/looking-for-modal';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { featherEdit } from '@ng-icons/feather-icons';

@Component({
  selector: 'app-looking-for',
  imports: [InfoPod, InfoText, LookingForModal, NgIcon],
  viewProviders: [provideIcons({ featherEdit })],
  templateUrl: './looking-for.html',
})
export class LookingFor {
  //store
  desiredJobTitle = signal<string | null>('Software Developer');
  salary = signal<string | null>('50000');
  location = signal<string | null>('London');
  jobType = signal<string | null>('Full time');
}
