import { Component, output } from '@angular/core';
import { featherX } from '@ng-icons/feather-icons';
import { NgIcon, provideIcons } from '@ng-icons/core';

@Component({
  selector: 'app-modal',
  imports: [NgIcon],
  viewProviders: [provideIcons({ featherX })],
  templateUrl: './modal.html',
})
export class Modal {
  closed = output<void>();
}
