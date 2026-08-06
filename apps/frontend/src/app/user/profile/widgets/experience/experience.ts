import { Component, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { featherPlusCircle } from '@ng-icons/feather-icons';
import { InfoPod } from '../../../../shared/info-pod/info-pod';
import { ExpText } from '../../../../shared/exp-text/exp-text';
import { ExperienceModal } from '../modal-content/experience-modal/experience-modal';

@Component({
  selector: 'app-experience',
  imports: [InfoPod, ExpText, ExperienceModal, NgIcon],
  templateUrl: './experience.html',
  viewProviders: [provideIcons({ featherPlusCircle })],
})
export class Experience {
  experience = signal<any[]>([]);

  handleRemove(id: string) {
    this.experience.update((current) =>
      current.filter((exp) => exp.uuid !== id),
    );
    // API call + store dispatch wired up later!
  }
}
