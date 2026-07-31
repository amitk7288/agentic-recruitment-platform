import { Component, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Button } from '../../../../../shared/button/button';

@Component({
  selector: 'app-status-modal',
  imports: [FormsModule, Button],
  templateUrl: './status-modal.html',
})
export class StatusModal {
  employmentStatus = input<string | null>(null);
  noticePeriod = input<string | null>(null);
  workEligibility = input<boolean | null>(null);
  closeModal = output<void>();

  employmentField = signal('');
  noticeField = signal('');
  eligibleField = signal(false);

  async handleSubmit(e: SubmitEvent) {
    e.preventDefault();

    const updateData = {
      employmentStatus: this.employmentField(),
      noticePeriod: this.noticeField(),
      workEligibility: this.eligibleField(),
    };

    console.log('Status update:', updateData);
    // API call + store dispatch wired up later!
    this.closeModal.emit();
  }
}