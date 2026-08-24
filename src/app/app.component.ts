import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './sections/hero.component';
import { AboutComponent } from './sections/about.component';
import { SkillsComponent } from './sections/skills.component';
import { ProjectsComponent } from './sections/projects.component';
import { ContactComponent } from './sections/contact.component';
import { FooterComponent } from './sections/footer.component';
import { NyanComponent } from './pixel/nyan.component';
import { JunimosComponent } from './pixel/junimos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent,
    NyanComponent,
    JunimosComponent,
  ],
  template: `
    <a class="skip-link" href="#hero">Skip to content</a>
    <app-nyan />
    <app-junimos />
    <app-navbar />
    <main>
      <app-hero />
      <app-about />
      <app-skills />
      <app-projects />
      <app-contact />
    </main>
    <app-footer />
  `,
  styles: [
    `
      .skip-link {
        position: absolute;
        left: -999px;
        top: 0.5rem;
        z-index: 100;
        background-color: var(--accent);
        color: var(--background);
        padding: 0.6rem 1rem;
        border-radius: var(--radius);
        font-family: var(--font-display);
        font-weight: 600;
      }
      .skip-link:focus {
        left: 0.5rem;
      }
    `,
  ],
})
export class AppComponent {}
