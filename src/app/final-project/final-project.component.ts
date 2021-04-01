import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../portfolio.service';

@Component({
  selector: 'app-final-project',
  templateUrl: './final-project.component.html',
  styleUrls: ['./final-project.component.css'],
})
export class FinalProjectComponent implements OnInit {
  projects: any = [];
  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.getAndSetProject();
  }

  getAndSetProject = () => {
    this.portfolioService.getProject().subscribe((response: any) => {
      for (let i = 0; i < response.length; i++) {
        if (response[i].title === 'Final Project: Get to the Gig') {
          this.projects.push(response[i]);
        }
      }
    });
  };
}
