import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-auth-buttons',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './auth-buttons.html',
})
export class AuthButtons {}
