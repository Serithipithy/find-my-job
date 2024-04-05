import { Component, Input, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-title-card',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './title-card.component.html',
  styleUrl: './title-card.component.scss'
})
export class TitleCardComponent implements OnInit {
  @Input() title?: string;
  @Input() icon?: string;
  
  ngOnInit() {
    console.log('Initiated TitleCardComponent');
  }
}
