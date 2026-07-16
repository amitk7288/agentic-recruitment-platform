import { Component, input, output } from '@angular/core';
import { featherTrash } from '@ng-icons/feather-icons';
import { NgIcon, provideIcons } from '@ng-icons/core';

@Component({
  selector: 'app-exp-text',
  imports: [NgIcon],
  viewProviders: [provideIcons({ featherTrash })],
  templateUrl: './exp-text.html',
})
export class ExpText {
  expRole = input.required<string>();
  company = input.required<string>();
  from = input.required<string>();
  to = input.required<string>();
  remove = output();
}
