import { Component, input, output } from '@angular/core';
import { featherTrash } from '@ng-icons/feather-icons';
import { NgIcon, provideIcons } from '@ng-icons/core';

@Component({
  selector: 'app-qualifications-text',
  imports: [NgIcon],
  viewProviders: [provideIcons({ featherTrash })],
  templateUrl: './qualifications-text.html',
})
export class QualificationsText {
  name = input<string>();
  school = input<string>();
  yearStart = input<string>();
  yearEnd = input<string>();
  subject = input<string>();
  grade = input<string>();
  remove = output<void>();
}
