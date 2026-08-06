import { Component, viewChild, ElementRef, signal } from '@angular/core';
import { InfoPod } from '../../shared/info-pod/info-pod';
import {
  featherPhone,
  featherMail,
  featherEdit,
} from '@ng-icons/feather-icons';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { AboutModal } from '../profile/widgets/modal-content/about-modal/about-modal';

@Component({
  selector: 'app-about',
  imports: [AboutModal, InfoPod, NgIcon],
  templateUrl: './about.html',
  viewProviders: [
    provideIcons({
      featherPhone,
      featherMail,
      featherEdit,
    }),
  ],
})
export class About {
  // dummy data until store is ready
  defaultProfilePic =
    'https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg';
  firstName = 'John';
  lastName = 'Doe';
  jobTitle = 'Software Engineer';
  tel = '07123456789';
  email = 'john@example.com';

  imgPicker = viewChild<ElementRef>('imgPicker');
  preview = signal<string>(this.defaultProfilePic);

  handleUpdateImgClick(e: Event) {
    e.preventDefault();
    this.imgPicker()?.nativeElement.click();
  }

  handleFileChange(e: Event) {
    const input = e.target as HTMLInputElement;
    const selectedFile = input.files?.[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        this.preview.set(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
    }
  }
}
