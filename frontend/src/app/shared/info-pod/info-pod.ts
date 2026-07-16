import { Component, input, signal } from '@angular/core';
import { Modal } from '../modal/modal';

@Component({
  selector: 'app-info-pod',
  imports: [Modal],
  templateUrl: './info-pod.html',
})
export class InfoPod {
  isOpen = signal<boolean>(false);
  title = input.required<string>();
  headerLink = input.required<string>();

  openModal() {
    this.isOpen.set(true);
  }
  closeModal() {
    this.isOpen.set(false);
  }
}
