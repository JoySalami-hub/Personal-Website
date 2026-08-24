import { Component } from '@angular/core';
import { PixelArtComponent } from './pixel-art.component';
import { JUNIMOS } from './sprites';

/**
 Cutie patootie junimos that peek in and out from the edges of the screen, then duck back
  behind them sorta like the little forest spirits from Stardew Valley. So lowkey I be stealing from that game but I don't care.
  I love those little guys. I want them to be my friends. 
  I want to be their friend. I want to be a junimo. 
  I want to be a junimo and live in the forest and help people farm and stuff and then one day
  a big scary monster comes and tries to eat me but then my junimo friends come and save me
  and we all live happily ever after in the forest together. The end.
  Also given em a mixed, pointer-events-free overlay so they never block interaction.
 */
@Component({
  selector: 'app-junimos',
  standalone: true,
  imports: [PixelArtComponent],
  template: `
    <div class="junimos" aria-hidden="true">
      <span class="peeker peeker--bl">
        <app-pixel-art [sprite]="j[0]" [pixel]="6" />
      </span>
      <span class="peeker peeker--right">
        <app-pixel-art [sprite]="j[2]" [pixel]="6" />
      </span>
      <span class="peeker peeker--left">
        <app-pixel-art [sprite]="j[3]" [pixel]="6" />
      </span>
      <span class="peeker peeker--br">
        <app-pixel-art [sprite]="j[4]" [pixel]="6" />
      </span>
      <span class="peeker peeker--top">
        <app-pixel-art [sprite]="j[5]" [pixel]="6" />
      </span>
    </div>
  `,
  styles: [
    `
      .junimos {
        position: fixed;
        inset: 0;
        z-index: 4;
        pointer-events: none;
        overflow: hidden;
      }

      .peeker {
        position: fixed;
        line-height: 0;
        will-change: transform;
      }

      /* Peek up from the bottom edge */
      .peeker--bl {
        left: 4vw;
        bottom: 0;
        animation: peek-up 10s ease-in-out infinite;
      }
      .peeker--br {
        right: 6vw;
        bottom: 0;
        animation: peek-up 13s ease-in-out infinite;
        animation-delay: 5s;
      }

      /* Peek in from the side edges */
      .peeker--right {
        right: 0;
        top: 42%;
        animation: peek-left 12s ease-in-out infinite;
        animation-delay: 2.5s;
      }
      .peeker--left {
        left: 0;
        top: 68%;
        animation: peek-right 15s ease-in-out infinite;
        animation-delay: 7s;
      }

      /* Peek down from the top edge */
      .peeker--top {
        top: 0;
        left: 60%;
        animation: peek-down 14s ease-in-out infinite;
        animation-delay: 9s;
      }

      @keyframes peek-up {
        0%,
        52%,
        100% {
          transform: translateY(105%);
        }
        60%,
        88% {
          transform: translateY(32%);
        }
      }
      @keyframes peek-down {
        0%,
        52%,
        100% {
          transform: translateY(-105%);
        }
        60%,
        88% {
          transform: translateY(-32%);
        }
      }
      @keyframes peek-left {
        0%,
        52%,
        100% {
          transform: translateX(105%);
        }
        60%,
        88% {
          transform: translateX(30%);
        }
      }
      @keyframes peek-right {
        0%,
        52%,
        100% {
          transform: translateX(-105%);
        }
        60%,
        88% {
          transform: translateX(-30%);
        }
      }

      @media (prefers-reduced-motion: reduce) {
        .peeker {
          animation: none !important;
        }
        .peeker--bl,
        .peeker--br {
          transform: translateY(32%);
        }
        .peeker--top {
          transform: translateY(-32%);
        }
        .peeker--right {
          transform: translateX(30%);
        }
        .peeker--left {
          transform: translateX(-30%);
        }
      }

      @media (max-width: 640px) {
        .peeker--right,
        .peeker--left,
        .peeker--top {
          display: none;
        }
      }
    `,
  ],
})
export class JunimosComponent {
  readonly j = JUNIMOS;
}
