import { Component, signal, computed, inject } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs/operators';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { featherCircle, featherCheckCircle } from '@ng-icons/feather-icons';
import { SectionCompleted } from '../section-completed/section-completed';
import { Button } from '../../shared/button/button';

@Component({
  selector: 'app-profile-complete',
  imports: [SectionCompleted, Button, RouterLink, NgIcon],
  templateUrl: './profile-complete.html',
  viewProviders: [provideIcons({ featherCircle, featherCheckCircle })],
})
export class ProfileComplete {
  private route = inject(ActivatedRoute);
  isProfile = toSignal(
    this.route.url.pipe(map(() => location.pathname === '/profile')),
  );

  about = signal(false);
  cv = signal(false);
  looking = signal(false);
  status = signal(false);
  exp = signal(false);
  qual = signal(false);

  completedSections = computed(() => [
    this.about(),
    this.cv(),
    this.looking(),
    this.status(),
    this.exp(),
    this.qual(),
  ]);

  completedCount = computed(
    () => this.completedSections().filter(Boolean).length,
  );
}
