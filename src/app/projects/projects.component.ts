import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../portfolio.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  grandCircusProjects: any = [];
  personalProjects: any = [];

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    console.log('hello');
    this.getAndSetSummaries();
  }

  getAndSetSummaries = () => {
    this.portfolioService.getSummary().subscribe((response: any) => {
      for (let i = 0; i < response.length; i++) {
        if (
          response[i].type === 'Grand Circus' &&
          response[i].display === true
        ) {
          this.grandCircusProjects.push(response[i]);
        }
        if (response[i].type === 'Personal' && response[i].display === true) {
          this.personalProjects.push(response[i]);
        }
      }
    });
  };
}
