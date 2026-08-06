import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sec-loc-grid-item',
  templateUrl: './sec-loc-grid-item.html',
  imports: [RouterLink],
})
export class SecLocGridItem {
  img = input.required<string>();
  title = input.required<string>();
}
