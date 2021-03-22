import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinalProjectComponent } from './final-project/final-project.component';
import { HomeComponent } from './home/home.component';
import { JwMemoryGameComponent } from './jw-memory-game/jw-memory-game.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProtfolioSiteComponent } from './protfolio-site/protfolio-site.component';
import { ResumeComponent } from './resume/resume.component';
import { RetroflixComponent } from './retroflix/retroflix.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'jw-memory-game', component: JwMemoryGameComponent },
  { path: 'retroflix', component: RetroflixComponent },
  { path: 'portfolio-site', component: ProtfolioSiteComponent },
  { path: 'final-project', component: FinalProjectComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
