import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JobModel } from '../models/job.model';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  private readonly baseUrl: string = "https://jobs-centric-express-2024.vercel.app/api/jobs";

  constructor(private readonly httpClient: HttpClient) { }

  getJobs(): Observable<JobModel[]> {
    return this.httpClient.get<JobModel[]>(this.baseUrl);
  }

  getJobById(id: string): Observable<JobModel> {
    return this.httpClient.get<JobModel>(`${this.baseUrl}/${id}`)
  }

  addJob(job: JobModel): Observable<unknown> {
    return this.httpClient.post(`${this.baseUrl}/add`, job);
  }

}
