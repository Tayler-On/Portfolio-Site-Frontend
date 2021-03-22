import { Component, Input, OnInit } from '@angular/core';
import { PortfolioService } from '../portfolio.service';

@Component({
  selector: 'app-jw-memory-game',
  templateUrl: './jw-memory-game.component.html',
  styleUrls: ['./jw-memory-game.component.css'],
})
export class JwMemoryGameComponent implements OnInit {
  projects: any = [];

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.getAndSetProject();
  }

  getAndSetProject = () => {
    this.portfolioService.getProject().subscribe((response: any) => {
      for (let i = 0; i < response.length; i++) {
        if (response[i].title === 'The Jack White Memory Game') {
          this.projects.push(response[i]);
        }
      }
    });
  };
}
