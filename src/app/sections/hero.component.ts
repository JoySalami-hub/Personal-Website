import { Component } from '@angular/core';
import { PixelArtComponent } from '../pixel/pixel-art.component';
import { HEART, SPARKLE } from '../pixel/sprites';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [PixelArtComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  readonly heart = HEART;
  readonly sparkle = SPARKLE;
}
