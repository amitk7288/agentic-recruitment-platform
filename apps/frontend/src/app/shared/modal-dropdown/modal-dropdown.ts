import { Component, output } from '@angular/core';
import { featherX } from '@ng-icons/feather-icons';
import { NgIcon, provideIcons } from '@ng-icons/core';

@Component({
  selector: 'app-modal-dropdown',
  imports: [NgIcon],
  viewProviders: [provideIcons({ featherX })],
  templateUrl: './modal-dropdown.html',
})
export class ModalDropdown {
  closed = output<void>();
}
