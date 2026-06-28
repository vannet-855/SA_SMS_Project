import { Component } from '@angular/core';

@Component({
  selector: 'app-topbar',
  standalone: true,
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss',
})
export class TopbarComponent {
  title = 'Dashboard';
  subtitle = 'Wednesday, 18 June 2025 · Academic Year 2024–25';
  alertsCount = 7;
}

