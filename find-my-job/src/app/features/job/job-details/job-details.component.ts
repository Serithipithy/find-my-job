import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { JobModel } from '../models/job.model';
import { JobService } from '../services/job.service';

@Component({
  selector: 'app-job-details',
  standalone: false,
  templateUrl: './job-details.component.html',
  styleUrl: './job-details.component.scss'
})
export class JobDetailsComponent implements OnInit {
  jobContent?: JobModel;
  jobId: string;

  constructor(private readonly route: ActivatedRoute, private readonly jobService: JobService) {
    this.jobId = this.route.snapshot.paramMap.get('id') ?? '';
  }

  ngOnInit(): void {
    this.getJob(this.jobId)
  }

  private getJob(jobId: string): void {
    this.jobService.getJobById(jobId).subscribe(job => {
      this.jobContent = job;
    })
  }
}
