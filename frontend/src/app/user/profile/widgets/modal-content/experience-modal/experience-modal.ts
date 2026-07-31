import { Component, signal, output, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Button } from '../../../../../shared/button/button';

@Component({
  selector: 'app-experience-modal',
  imports: [FormsModule, Button],
  templateUrl: './experience-modal.html',
})
export class ExperienceModal {
  closeModal = output<void>();

  expRole = signal('');
  company = signal('');
  yearStart = signal('');
  yearEnd = signal('');

  isFormValid = computed(
    () =>
      this.expRole().trim() !== '' &&
      this.company().trim() !== '' &&
      this.yearStart().trim() !== '' &&
      this.yearEnd().trim() !== '',
  );

  async handleAddExperience(e: SubmitEvent) {
    e.preventDefault();
    if (!this.isFormValid()) return;

    const newExperience = {
      expRole: this.expRole(),
      company: this.company(),
      yearStart: this.yearStart(),
      yearEnd: this.yearEnd(),
      uuid: crypto.randomUUID(),
    };

    console.log('New experience:', newExperience);
    // API call + store dispatch wired up later!
    this.closeModal.emit();
  }
}
