import { Component, signal, input, output } from '@angular/core';
import { form, FormField, required } from '@angular/forms/signals';
import { Button } from '../../../../../shared/button/button';

@Component({
  selector: 'app-about-modal',
  imports: [FormField, Button],
  templateUrl: './about-modal.html',
})
export class AboutModal {
  firstName = input<string>('');
  lastName = input<string>('');
  jobTitle = input<string>('');
  tel = input<string>('');
  email = input<string>('');
  profilePic = input<string>('');

  closeModal = output();

  aboutModel = signal({
    firstName: '',
    lastName: '',
    jobTitle: '',
    tel: '',
    email: '',
  });

  aboutForm = form(this.aboutModel, (schemaPath) => {
    required(schemaPath.firstName, { message: 'Name is required' });
    required(schemaPath.jobTitle, { message: 'Job Title is required' });
  });

  async handleSubmit(e: Event) {
    e.preventDefault();

    const updateData = {
      firstName: this.aboutModel().firstName,
      lastName: this.aboutModel().lastName,
      jobTitle: this.aboutModel().jobTitle,
      tel: this.aboutModel().tel,
      email: this.aboutModel().email,
      profilePic: this.profilePic(),
    };

    console.log('update data:', updateData);
  }
}
