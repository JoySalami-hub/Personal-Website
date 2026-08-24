import { Component, Input } from '@angular/core';

export interface Sprite {
  grid: string[];
  palette: Record<string, string>;
}

/*
  renders a pixel-art sprite from a character grid + color palette. Each character maps to a colored cell; '.' is transparent.
  pure CSS grid, should be crisp at any scale and fully animatable but time will tell lmao
 */
@Component({
  selector: 'app-pixel-art',
  standalone: true,
  template: `
    <div
      class="pixel-grid"
      [style.grid-template-columns]="cols"
      [style.width.px]="pxWidth"
      [style.height.px]="pxHeight"
      role="img"
      [attr.aria-label]="label || null"
      [attr.aria-hidden]="label ? null : 'true'"
    >
      @for (cell of cells; track $index) {
        <span [style.background]="cell"></span>
      }
    </div>
  `,
  styles: [
    `
      .pixel-grid {
        display: grid;
        line-height: 0;
        image-rendering: pixelated;
      }
      .pixel-grid span {
        display: block;
        width: 100%;
        aspect-ratio: 1 / 1;
      }
    `,
  ],
})
export class PixelArtComponent {
  @Input({ required: true }) sprite!: Sprite;
  @Input() pixel = 6;
  @Input() label = '';

  private get colCount(): number {
    return this.sprite.grid[0]?.length ?? 0;
  }

  get cols(): string {
    return `repeat(${this.colCount}, ${this.pixel}px)`;
  }

  get pxWidth(): number {
    return this.colCount * this.pixel;
  }

  get pxHeight(): number {
    return this.sprite.grid.length * this.pixel;
  }

  get cells(): string[] {
    const out: string[] = [];
    for (const row of this.sprite.grid) {
      for (const ch of row) {
        out.push(ch === '.' ? 'transparent' : this.sprite.palette[ch] ?? 'transparent');
      }
    }
    return out;
  }
}
