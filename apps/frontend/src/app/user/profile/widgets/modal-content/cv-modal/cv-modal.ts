import { Component, signal, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { featherUpload } from '@ng-icons/feather-icons';
import { Button } from '../../../../../shared/button/button';

@Component({
  selector: 'app-cv-modal',
  imports: [FormsModule, NgIcon, Button],
  templateUrl: './cv-modal.html',
  viewProviders: [provideIcons({ featherUpload })],
})
export class CvModal {
  cvValue = input<string | null>(null);
  closeModal = output<void>();

  fileName = signal<string | null>(null);

  handleFileChange(e: Event) {
    const input = e.target as HTMLInputElement;
    const file = input.files?.[0];
    this.fileName.set(file ? file.name : null);
  }

  async handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    console.log('File to upload:', this.fileName());
    // API call + store dispatch wired up later!
    this.closeModal.emit();
  }
}
