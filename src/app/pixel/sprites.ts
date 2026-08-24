import { Sprite } from './pixel-art.component';

/* nyan-style flying pop-tart cat (original homage). 15 x 10. */
export const CAT: Sprite = {
  grid: [
    '.kkkkkkkkk.....',
    '.kqqqqqqqk.kkk.',
    '.kpdpdpdpkkggk.',
    '.kdpdpdpqkgccgk',
    '.kpdpdpdpkgegek',
    '.kdpdpdpqkgmmgk',
    '.kkkkkkkkkkggk.',
    '..f..f..f......',
    '..k..k..k......',
    '...............',
  ],
  palette: {
    k: '#3a3a3a',
    q: '#f4cf9b',
    p: '#ffc0d6',
    d: '#ff5b8a',
    g: '#cdcdcd',
    c: '#ff9db0',
    e: '#2f2f2f',
    m: '#b23a5b',
    f: '#9a9a9a',
  },
};

/*
  junimo. 11 x 11.
  recolorable via the factory below so I can scatter a whole family of them.
 */
export function junimo(body: string, sprout = '#6cc24a'): Sprite {
  return {
    grid: [
      '.....l.....',
      '.....l.....',
      '...bbbbb...',
      '..bbbbbbb..',
      '.bbbbbbbbb.',
      '.bbbbbbbbb.',
      '.bbwbbbwbb.',
      '.bbwbbbwbb.',
      '.bbbbbbbbb.',
      '..bbbbbbb..',
      '...bbbbb...',
    ],
    palette: { b: body, l: sprout, w: '#2b2b2b' },
  };
}

/*junimos family. */
export const JUNIMOS: Sprite[] = [
  junimo('#7ac74f'), // green
  junimo('#f4a63b'), // orange
  junimo('#4cc4d6'), // teal
  junimo('#ff6b8a'), // pink
  junimo('#ffd23f'), // gold
  junimo('#e15b4c'), // red
];

/* le heart 7 x 7. */
export const HEART: Sprite = {
  grid: ['.rr.rr.', 'rprrrrr', 'rprrrrr', 'rrrrrrr', '.rrrrr.', '..rrr..', '...r...'],
  palette: { r: '#ff5c8a', p: '#ffd0dd' },
};

/* sparkle 7 x 7. */
export const SPARKLE: Sprite = {
  grid: ['...y...', '..yyy..', '.yyyyy.', 'yyywyyy', '.yyyyy.', '..yyy..', '...y...'],
  palette: { y: '#ffd447', w: '#fff4c2' },
};

/* rainbow band colors for the Nyan trail (top > bottom). */
export const RAINBOW = ['#ff595e', '#ff924c', '#ffca3a', '#8ac926', '#1982c4', '#6a4c93'];
