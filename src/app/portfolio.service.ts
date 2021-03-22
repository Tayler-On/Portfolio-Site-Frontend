import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  summaryURL: string = 'http://134.122.117.122:3000/summary';
  projectsURL: string = 'http://134.122.117.122:3000/projects';

  constructor(private http: HttpClient) {}

  getSummary = (): any => {
    return this.http.get(this.summaryURL);
  };

  getProject = (): any => {
    return this.http.get(this.projectsURL);
  };

  // getAllProjects = (type: string | null): any => {
  //   let params: any = {};
  //   if (type) {
  //     params.type = type;
  //   }
  //   return this.http.get(`${this.baseURL}/summary`, {
  //     params: params,
  //   });
  // };
}
