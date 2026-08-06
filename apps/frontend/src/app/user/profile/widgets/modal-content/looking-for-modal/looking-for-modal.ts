import { Component, signal, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Button } from '../../../../../shared/button/button';

@Component({
  selector: 'app-looking-for-modal',
  imports: [FormsModule, Button],
  templateUrl: './looking-for-modal.html',
})
export class LookingForModal {
  closeModal = output<void>();

  titleField = signal('');
  salaryField = signal('');
  locationField = signal('');
  jobTypeField = signal('');

  async handleSubmit(e: SubmitEvent) {
    e.preventDefault();

    const updateData = {
      desiredJobTitle: this.titleField(),
      salary: this.salaryField(),
      location: this.locationField(),
      jobType: this.jobTypeField(),
    };

    console.log('Payload to be sent:', updateData);
    // API call + store dispatch wired up later!
    this.closeModal.emit();
  }
}
