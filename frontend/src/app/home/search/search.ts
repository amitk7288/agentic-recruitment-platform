import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { featherChevronRight } from '@ng-icons/feather-icons'
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-search',
  imports: [NgIcon, RouterLink, ReactiveFormsModule],
  viewProviders: [provideIcons({ featherChevronRight })],
  templateUrl: './search.html',
})
export class Search {
  searchForm = new FormGroup({
    jobTitle: new FormControl('', Validators.required),
    jobLocation: new FormControl('', Validators.required),
  })

  onSubmit() {
    if (this.searchForm.valid) {
      console.log(this.searchForm.value);
      this.searchForm.reset();
    } else {
      this.searchForm.markAllAsTouched();
    }
  }
}
