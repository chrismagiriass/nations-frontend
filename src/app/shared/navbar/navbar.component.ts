import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, MatToolbarModule, MatButtonModule],
  template: `
    <mat-toolbar color="primary" class="toolbar">
      <span class="title">🌍 Nations Statistics Portal</span>
      <div class="nav-buttons">
        <button mat-button routerLink="/" routerLinkActive="active-link" [routerLinkActiveOptions]="{ exact: true }">Home</button>
        <button mat-button routerLink="/countries" routerLinkActive="active-link">Countries</button>
        <button mat-button routerLink="/max-gdp" routerLinkActive="active-link">Max GDP</button>
        <button mat-button routerLink="/stats-view" routerLinkActive="active-link">Stats View</button>
      </div>
      <span class="right-spacer"></span>
    </mat-toolbar>
  `,
  styles: [`
    .toolbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .title {
      flex: 1;
      text-align: left;
      font-weight: 600;
      font-size: 18px;
    }

    .nav-buttons {
      display: flex;
      gap: 16px;
      justify-content: center;
      flex: 1;
    }

    .right-spacer {
      flex: 1;
    }

    .active-link {
      color: rgb(255, 204, 64);
      font-weight: bold;
      border-bottom: 2px solid rgb(255, 204, 64);
    }
  `]
})
export class NavbarComponent {}



