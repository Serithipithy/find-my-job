import { Component, EventEmitter, Input, Output } from '@angular/core';

<<<<<<< HEAD
=======
import { Component, EventEmitter, Input, Output } from '@angular/core';
>>>>>>> practice/angular-introduction

@Component({
  selector: 'app-job-card',
  standalone: true,
  imports: [],
  templateUrl: './job-card.component.html',
  styleUrl: './job-card.component.scss'
})
export class JobCardComponent {
  @Input() id?: string;
  @Input() title?: string;
  @Input() position?: string;
  @Input() company?: string;
  @Input() location?: string;

  @Output() cardPressed = new EventEmitter<string>();

  onClick(): void {
    this.cardPressed.emit(this.id);
  }

}
