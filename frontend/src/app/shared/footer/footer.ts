import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
})
export class Footer {
  openSection = signal<string | null>(null);

  toggleSection(section: string) {
    this.openSection.update(current => current === section  ? null : section);
  }
}
