import { Component } from '@angular/core';
import { ManagementShellComponent } from '../../shared/management-shell/management-shell.component';

@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [ManagementShellComponent],
  templateUrl: './analytics.component.html',
  styleUrl: './analytics.component.scss'
})
export class AnalyticsComponent {}
