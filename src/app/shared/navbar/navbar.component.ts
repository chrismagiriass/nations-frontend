import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, MatToolbarModule, MatButtonModule],
  template: `
    <mat-toolbar color="primary">
      <span>My Nations App</span>
      <span class="spacer"></span>
      <button mat-button routerLink="/">Home</button>
      <button mat-button routerLink="/countries">Countries</button>
      <button mat-button routerLink="/max-gdp">Max GDP</button>
      <button mat-button routerLink="/filtered-stats">Filtered Stats</button>
    </mat-toolbar>
  `,
  styles: [`
    .spacer { flex: 1 1 auto; }
  `]
})
export class NavbarComponent {}
