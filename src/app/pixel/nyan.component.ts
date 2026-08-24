import { Component } from '@angular/core';
import { PixelArtComponent } from './pixel-art.component';
import { CAT, RAINBOW } from './sprites';

@Component({
  selector: 'app-nyan',
  standalone: true,
  imports: [PixelArtComponent],
  template: `
    <div class="nyan" aria-hidden="true">
      <div class="nyan__trail">
        @for (band of rainbow; track band) {
          <span [style.background]="band"></span>
        }
      </div>
      <div class="nyan__cat">
        <app-pixel-art [sprite]="cat" [pixel]="6" />
      </div>
    </div>
  `,
  styles: [
    `
      .nyan {
        position: fixed;
        top: 22%;
        left: 0;
        z-index: 40;
        display: flex;
        align-items: center;
        pointer-events: none;
        will-change: transform;
        animation: nyan-fly 16s linear infinite;
      }
      .nyan__trail {
        display: flex;
        flex-direction: column;
        width: 120px;
        position: relative;
        overflow: hidden;
      }
      .nyan__trail span {
        display: block;
        height: 6px;
      }
      .nyan__trail::after {
        content: '';
        position: absolute;
        inset: 0;
        background: repeating-linear-gradient(
          90deg,
          rgba(0, 0, 0, 0.14) 0 6px,
          transparent 6px 12px
        );
        animation: nyan-trail 0.35s steps(2) infinite;
      }
      .nyan__cat {
        margin-left: -4px;
        animation: nyan-bob 0.35s steps(2) infinite alternate;
      }
      @keyframes nyan-fly {
        0% {
          transform: translateX(-220px);
        }
        100% {
          transform: translateX(calc(100vw + 40px));
        }
      }
      @keyframes nyan-trail {
        to {
          transform: translateX(-12px);
        }
      }
      @keyframes nyan-bob {
        to {
          transform: translateY(4px);
        }
      }
      @media (prefers-reduced-motion: reduce) {
        .nyan {
          display: none;
        }
      }
    `,
  ],
})
export class NyanComponent {
  readonly cat = CAT;
  readonly rainbow = RAINBOW;
}
