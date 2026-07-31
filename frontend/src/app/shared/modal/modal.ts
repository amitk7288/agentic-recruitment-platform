import { Component, input, output, TemplateRef } from '@angular/core';
import { NgTemplateOutlet, NgClass } from '@angular/common';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { featherX } from '@ng-icons/feather-icons';

@Component({
  selector: 'app-modal',
  imports: [NgTemplateOutlet, NgIcon, NgClass],
  viewProviders: [provideIcons({ featherX })],
  templateUrl: './modal.html',
})
export class Modal {
  isOpen = input<boolean>(false);
  content = input<TemplateRef<unknown> | undefined>(undefined);
  closed = output<void>();

  closeOnBackdrop(e: MouseEvent) {
    if (e.target === e.currentTarget) this.closed.emit();
  }
}
