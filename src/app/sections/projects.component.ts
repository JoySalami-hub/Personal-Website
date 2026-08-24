import { Component } from '@angular/core';
import { RevealDirective } from '../reveal.directive';
import { PROJECTS, Project } from '../data';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  readonly projects: Project[] = PROJECTS;
}
