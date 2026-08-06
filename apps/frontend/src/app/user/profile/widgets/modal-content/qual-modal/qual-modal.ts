import { Component, signal, output, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Button } from '../../../../../shared/button/button';

@Component({
  selector: 'app-qual-modal',
  imports: [FormsModule, Button],
  templateUrl: './qual-modal.html',
})
export class QualModal {
  closeModal = output<void>();

  name = signal('');
  school = signal('');
  yearStart = signal('');
  yearEnd = signal('');
  subject = signal('');
  grade = signal('');

  isFormValid = computed(
    () =>
      this.name().trim() !== '' &&
      this.school().trim() !== '' &&
      this.yearStart().trim() !== '' &&
      this.yearEnd().trim() !== '' &&
      this.subject().trim() !== '' &&
      this.grade().trim() !== '',
  );

  async handleAddQualification(e: SubmitEvent) {
    e.preventDefault();
    if (!this.isFormValid()) return;

    const newQualification = {
      name: this.name(),
      school: this.school(),
      yearStart: this.yearStart(),
      yearEnd: this.yearEnd(),
      subject: this.subject(),
      grade: this.grade(),
      uuid: crypto.randomUUID(),
    };

    console.log('New qualification:', newQualification);
    // API call + store dispatch wired up later!
    this.closeModal.emit();
  }
}
