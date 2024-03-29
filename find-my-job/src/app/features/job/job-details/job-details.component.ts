import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import jobList from '../data/jobs-list.json';
import { JobModel } from '../models/job.model';

@Component({
  selector: 'app-job-details',
  standalone: false,
  templateUrl: './job-details.component.html',
  styleUrl: './job-details.component.scss'
})
export class JobDetailsComponent {
  jobList: JobModel[] = jobList;
  jobContent?: JobModel;
  constructor(private readonly route: ActivatedRoute) {
    const jobId = this.route.snapshot.paramMap.get('id') ?? '';
    this.getJob(jobId);
  }

  private getJob(jobId: string): void {
    this.jobContent = jobList.find(job => job.id === jobId);
  }
}
