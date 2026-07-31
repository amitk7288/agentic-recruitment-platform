import { Component, signal, inject, output } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mobile-job-search',
  imports: [FormsModule],
  templateUrl: './mobile-job-search.html',
})
export class MobileJobSearch {
  private router = inject(Router);

  closeModal = output<void>();

  what = signal('');
  where = signal('');
  errorWhat = signal(false);
  errorWhere = signal(false);

  handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    this.errorWhat.set(this.what().trim() === '');
    this.errorWhere.set(this.where().trim() === '');

    if (this.what() && this.where()) {
      this.router.navigate(['/search'], {
        queryParams: { keywords: this.what(), location: this.where() },
      });
      this.closeModal.emit();
    }
  }
}
