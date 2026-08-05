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
  validate,
} from '@angular/forms/signals';

@Component({
  selector: 'app-user-register',
  imports: [NgIcon, AuthButtons, Oauth, FormField, FormRoot],
  templateUrl: './user-register.html',
  viewProviders: [provideIcons({ featherEye, featherEyeOff })],
})
export class UserRegister {
  router = inject(Router);

  showPass = signal(false);
  isLoading = signal(false); // wire up to your API call later

  registerModel = signal({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  registerForm = form(this.registerModel, (s) => {
    required(s.name, { message: 'Please enter your name' });

    required(s.email, { message: 'Please enter your email address' });
    email(s.email, { message: 'Please enter a valid email address' });

    required(s.password, { message: 'Please enter a password' });

    required(s.confirmPassword, { message: 'Please confirm your password' });
    validate(s.confirmPassword, ({ value, valueOf }) => {
      if (value() !== valueOf(s.password)) {
        return { kind: 'passwordMismatch', message: 'Passwords do not match' };
      }
      return null;
    });
  });

  toggleShowPass() {
    this.showPass.set(!this.showPass());
  }

  onSubmit() {
    if (this.registerForm().valid()) {
      const data = this.registerModel();
      console.log('Register with:', data);
      // TODO: call API service, dispatch to store, toast, navigate
    }
  }
}
