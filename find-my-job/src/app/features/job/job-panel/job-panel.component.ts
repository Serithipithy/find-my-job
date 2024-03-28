import { Component } from '@angular/core';

import { TitleCardComponent } from '../../../shared/components/title-card';

@Component({
  selector: 'app-job-panel',
  standalone: true,
  imports: [TitleCardComponent],
  templateUrl: './job-panel.component.html',
  styleUrl: './job-panel.component.scss'
})
export class JobPanelComponent {

}
