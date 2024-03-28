import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-job-panel',
  templateUrl: './job-panel.component.html',
  styleUrl: './job-panel.component.scss'
})
export class JobPanelComponent {

  constructor(private readonly router: Router) { }

  goToPage(path: string): void {
    this.router.navigate([this.router.url, path]);
  }

}
