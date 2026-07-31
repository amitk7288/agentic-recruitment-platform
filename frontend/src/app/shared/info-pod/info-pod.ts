import {
  Component,
  input,
  signal,
  contentChild,
  TemplateRef,
} from '@angular/core';
import { Modal } from '../modal/modal';

@Component({
  selector: 'app-info-pod',
  imports: [Modal],
  templateUrl: './info-pod.html',
})
export class InfoPod {
  isOpen = signal<boolean>(false);
  podTitle = input.required<string>();
  headerLink = input<string>();
  modalContent = contentChild<TemplateRef<unknown>>('modalContent');
}
