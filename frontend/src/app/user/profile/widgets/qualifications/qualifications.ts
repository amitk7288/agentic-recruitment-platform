import { Component, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { featherPlusCircle } from '@ng-icons/feather-icons';
import { InfoPod } from '../../../../shared/info-pod/info-pod';
import { QualModal } from '../modal-content/qual-modal/qual-modal';
import { QualificationsText } from '../../../../shared/qualifications-text/qualifications-text';

@Component({
  selector: 'app-qualifications',
  imports: [InfoPod, QualModal, NgIcon, QualificationsText],
  templateUrl: './qualifications.html',
  viewProviders: [provideIcons({ featherPlusCircle })],
})
export class Qualifications {
  qualifications = signal<any[]>([]);
  // store wired up later!

  handleRemove(id: string) {
    this.qualifications.update((current) =>
      current.filter((q) => q.uuid !== id),
    );
    // API call + store dispatch wired up later!
  }
}
