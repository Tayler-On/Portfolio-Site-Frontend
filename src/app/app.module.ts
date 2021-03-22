import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './header/header.component';
import { ResumeComponent } from './resume/resume.component';
import { JwMemoryGameComponent } from './jw-memory-game/jw-memory-game.component';
import { RetroflixComponent } from './retroflix/retroflix.component';
import { ProtfolioSiteComponent } from './protfolio-site/protfolio-site.component';
import { ProjectComponent } from './project/project.component';
import { ProjectPageComponent } from './project-page/project-page.component';
import { FinalProjectComponent } from './final-project/final-project.component';
import { YouTubePlayerModule } from '@angular/youtube-player';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectsComponent,
    PageNotFoundComponent,
    HeaderComponent,
    ResumeComponent,
    JwMemoryGameComponent,
    RetroflixComponent,
    ProtfolioSiteComponent,
    ProjectComponent,
    ProjectPageComponent,
    FinalProjectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    YouTubePlayerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
