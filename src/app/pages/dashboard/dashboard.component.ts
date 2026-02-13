import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagementShellComponent } from '../../shared/management-shell/management-shell.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, ManagementShellComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  metrics = [
    { label: 'Active Valets', value: 28, trend: '+12%' },
    { label: 'Vehicles Parked', value: 342, trend: '+6%' },
    { label: 'Pending Pickups', value: 19, trend: '-4%' }
  ];
}
