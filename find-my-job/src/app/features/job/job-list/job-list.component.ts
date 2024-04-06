import { Component } from '@angular/core';
import { Router } from '@angular/router';

import jobData from '../data/jobs-list.json';
import { JobModel } from '../models/job.model';

@Component({
  selector: 'app-job-list',
  standalone: false,
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.scss'
})
export class JobListComponent {
  jobs: JobModel[] = jobData;

  constructor(private readonly router: Router) {}

  onCardPressed(jobId: string): void {
    this.goToDetails(jobId);
  }

  private goToDetails(jobId: string): void {
    this.router.navigate(['job/details/', jobId]);
  }

}
