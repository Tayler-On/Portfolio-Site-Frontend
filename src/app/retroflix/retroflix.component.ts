import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../portfolio.service';

@Component({
  selector: 'app-retroflix',
  templateUrl: './retroflix.component.html',
  styleUrls: ['./retroflix.component.css'],
})
export class RetroflixComponent implements OnInit {
  projects: any = [];

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.getAndSetProject();
  }

  getAndSetProject = () => {
    this.portfolioService.getProject().subscribe((response: any) => {
      for (let i = 0; i < response.length; i++) {
        if (response[i].title === 'RetroFlix') {
          this.projects.push(response[i]);
        }
      }
    });
  };
}
