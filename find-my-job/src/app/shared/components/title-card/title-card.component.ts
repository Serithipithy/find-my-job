import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-title-card',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './title-card.component.html',
  styleUrl: './title-card.component.scss'
})
export class TitleCardComponent {
  @Input() title?: string;
  @Input() icon?: string;
  @Input() background?: string;

  gOnInit(): void {
    if (this.background) {
      this.background = "url('" + this.background + "')";
    } else {
      this.background = "linear-gradient(to bottom right, #27ae60, #87bc27)";
    }
  }
}
