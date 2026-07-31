import { Component, input } from '@angular/core';

@Component({
  selector: 'app-section-completed',
  imports: [],
  templateUrl: './section-completed.html',
})
export class SectionCompleted {
  highlight = input<boolean>(false);
}