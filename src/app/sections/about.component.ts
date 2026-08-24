import { Component } from '@angular/core';
import { RevealDirective } from '../reveal.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  readonly highlights = [
    'Problem solving mindset',
    'Curiosity and willingness to learn',
    'Technical knowledge and experience',
    'Creativity and a different perspective',
  ];
}
