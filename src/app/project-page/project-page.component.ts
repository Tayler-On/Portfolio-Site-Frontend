import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Projectpage } from '../interfaces/projectpage';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css'],
})
export class ProjectPageComponent implements OnInit {
  @Input() projectpageRef!: Projectpage;
  // sanitizer: any;
  apiLoaded = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    if (!this.apiLoaded) {
      // This code loads the IFrame Player API code asynchronously, according to the instructions at
      // https://developers.google.com/youtube/iframe_api_reference#Getting_Started
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }
  }

  // transform(projectpageRef: { video: any }, video: any) {
  //   this.sanitizer.bypassSecurityTrustResourceUrl(projectpageRef.video) ===
  //     projectpageRef.video;
  //   return projectpageRef.video;
  // }
}
