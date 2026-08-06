import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { form, FormField, FormRoot, required } from '@angular/forms/signals';
import { ModalDropdown } from '../../shared/modal-dropdown/modal-dropdown';
import { MobileJobSearch } from './mobile-job-search/mobile-job-search';

@Component({
  selector: 'app-job-search',
  imports: [FormField, FormRoot, ModalDropdown, MobileJobSearch],
  templateUrl: './job-search.html',
})
export class JobSearch {
  private router = inject(Router);

  isOpen = signal(false);

  searchModel = signal({
    what: '',
    where: '',
  });

  searchForm = form(
    this.searchModel,
    (schemaPath) => {
      required(schemaPath.what, { message: 'Required field' });
      required(schemaPath.where, { message: 'Required field' });
    },
    {
      submission: {
        action: async () => {
          const { what, where } = this.searchModel();
          this.router.navigate(['/search'], {
            queryParams: { keywords: what, location: where },
          });
        },
      },
    },
  );
}
