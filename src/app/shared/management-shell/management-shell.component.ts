import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-management-shell',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './management-shell.component.html',
  styleUrl: './management-shell.component.scss'
})
export class ManagementShellComponent {
  @Input({ required: true }) pageTitle = '';
  @Input({ required: true }) pageSubtitle = '';
}
