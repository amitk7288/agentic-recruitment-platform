import { Component, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { featherPlusCircle } from '@ng-icons/feather-icons';
import { InfoPod } from '../../../../shared/info-pod/info-pod';
import { CvModal } from '../modal-content/cv-modal/cv-modal';

@Component({
  selector: 'app-cv',
  imports: [InfoPod, CvModal, NgIcon],
  templateUrl: './cv.html',
  viewProviders: [provideIcons({ featherPlusCircle })],
})
export class Cv {
  cvValue = signal<string | null>(null);
  // store wired up later!
}
