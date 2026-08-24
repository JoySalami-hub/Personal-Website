import { Component } from '@angular/core';
import { RevealDirective } from '../reveal.directive';
import { SKILL_GROUPS, SkillGroup } from '../data';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {
  readonly groups: SkillGroup[] = SKILL_GROUPS;
}
