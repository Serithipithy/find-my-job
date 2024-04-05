import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import jobData from '../data/jobs-list.json';
import { JobModel } from '../models/job.model';
import { JobService } from '../services/job.service';

@Component({
  selector: 'app-job-list',
  standalone: false,
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.scss'
})
export class JobListComponent implements OnInit {
  //jobs: JobModel[] = jobData;
  jobs: JobModel[] = [];

  constructor(private readonly router: Router, private readonly jobService: JobService) {}

  ngOnInit(): void {
    this.jobService.getJobs().subscribe(jobs => {
      this.jobs = jobs;
    })
  }

  onCardPressed(jobId: string): void {
    this.goToDetails(jobId);
  }

  private goToDetails(jobId: string): void {
    this.router.navigate(['job/details/', jobId]);
  }

}
