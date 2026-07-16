import { Component, input } from '@angular/core';

@Component({
  selector: 'app-info-text',
  imports: [],
  templateUrl: './info-text.html',
})
export class InfoText {
  title = input.required<string>();
  body = input.required<string>();
}
