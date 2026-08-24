import { Component } from '@angular/core';
import { SOCIALS, SocialLink } from '../data';
import { PixelArtComponent } from '../pixel/pixel-art.component';
import { JUNIMOS } from '../pixel/sprites';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [PixelArtComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  readonly socials: SocialLink[] = SOCIALS;
  readonly year = new Date().getFullYear();
  readonly junimos = JUNIMOS;
}
