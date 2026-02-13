import { Component } from '@angular/core';
import { ManagementShellComponent } from '../../shared/management-shell/management-shell.component';

@Component({
  selector: 'app-operations',
  standalone: true,
  imports: [ManagementShellComponent],
  templateUrl: './operations.component.html',
  styleUrl: './operations.component.scss'
})
export class OperationsComponent {}
