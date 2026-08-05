import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { AuthButtons } from '../../shared/auth-buttons/auth-buttons';
import { Oauth } from '../../shared/oauth/oauth';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { featherEye, featherEyeOff } from '@ng-icons/feather-icons';
import {
  form,
  FormField,
  FormRoot,
  required,
  email,
} from '@angular/forms/signals';

@Component({
  selector: 'app-user-sign-in',
  imports: [NgIcon, AuthButtons, Oauth, FormField, FormRoot],
  templateUrl: './user-login.html',
  viewProviders: [provideIcons({ featherEye, featherEyeOff })],
})
export class UserLogin {
  router = inject(Router);

  showPass = signal(false);
  isLoading = signal(false);
  formError = signal(false);
  isModalOpen = signal(false);

  signInModel = signal({
    email: '',
    password: '',
  });

  signInForm = form(this.signInModel, (s) => {
    required(s.email, { message: 'Please enter your email address' });
    email(s.email, { message: 'Please enter a valid email address' });

    required(s.password, { message: 'Please enter your password' });
  });

  toggleShowPass() {
    this.showPass.set(!this.showPass());
  }

  onSubmit() {
    if (this.signInForm().valid()) {
      this.formError.set(false);
      const data = this.signInModel();
      console.log('Sign in with:', data);
      // TODO: call API service, dispatch loginUser, navigate
    }
  }
}
