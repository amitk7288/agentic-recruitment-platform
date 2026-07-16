import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card-list',
  imports: [],
  templateUrl: './card-list.html',
})
export class CardList {
  title = input.required<string>();
}
