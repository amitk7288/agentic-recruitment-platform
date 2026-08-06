import { Component, output } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  imports: [],
  templateUrl: './side-menu.html',
})
export class SideMenu {
  closed = output<void>();
}
