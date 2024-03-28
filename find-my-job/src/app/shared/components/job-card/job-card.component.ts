import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-job-card',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './job-card.component.html',
  styleUrl: './job-card.component.scss'
})
export class JobCardComponent {
  @Input() title?: string;

}
