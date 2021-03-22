import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../portfolio.service';

@Component({
  selector: 'app-protfolio-site',
  templateUrl: './protfolio-site.component.html',
  styleUrls: ['./protfolio-site.component.css'],
})
export class ProtfolioSiteComponent implements OnInit {
  projects: any = [];

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.getAndSetProject();
  }

  getAndSetProject = () => {
    this.portfolioService.getProject().subscribe((response: any) => {
      for (let i = 0; i < response.length; i++) {
        if (response[i].title === 'Portfolio Site') {
          this.projects.push(response[i]);
        }
      }
    });
  };
}
