export interface Project {
  title: string;
  description: string;
  /**
   * Animated GIF (or static image) used as the project preview.
   * The <img> element renders animated GIFs natively so I can drop a .gif into
   * public/projects/ and point this field at it to get an animated preview.
   */
  gif: string;
  tags: string[];
  liveUrl: string;
  codeUrl: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface SocialLink {
  label: string;
  url: string;
}

export const PROJECTS: Project[] = [
  {
    title: 'Moshfall',
    description:
      'Mossfall is a 2D pixel-style Python/Pygame adventure game where the player explores cursed regions, helps NPCs, collects relics, negotiates or fights moss guardians, and unlocks gates to progress through the world.',
    gif: 'projects/Mossfall.png',
    tags: ['Python', 'Pygame', '2D Games', 'JSON', 'Pixel Art'],
    liveUrl: 'https://www.youtube.com/watch?v=LemCUSLQmnI',
    codeUrl: 'https://github.com/JoySalami-hub/MoshFall',
  },
  {
    title: 'Space Buns',
    description:
      'Devoloped a 3D VR game using Unreal Engine 5.x and Blender where players used VR controllers to navigate a space station to follow recipes, prepare cakes, and create either chocolate or strawberry cakes.',
    gif: 'projects/Bakery.png',
    tags: ['Unreal Engine 5.x', 'Blender', 'Blueprints', ],
    liveUrl: 'https://www.youtube.com/watch?v=5BEUtWQfSNI',
    codeUrl: 'https://1drv.ms/u/c/3f487c4fb8a074ab/IQCFDvV71t5ER6R0JfVPgIlVAT_qiB5lh2WlPX2Qg2KORKo?e=d6rZUo',
  },
  {
    title: 'Unix Shell',
    description:
      'A small Unix shell implemented in C that supports command execution such as cd,pwd,help and exit, piping, redirection, and background processes.',
    gif: 'projects/Unix.png',
    tags: ['C', 'GCC', 'Linux/Unix', 'Git/Github'],
    liveUrl: '#',
    codeUrl: 'https://github.com/JoySalami-hub/Unix-Shell',
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'Languages',
    items: ['TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'SQL', 'Python', `Java`, `C`,],
  },
  {
    category: 'Frameworks',
    items: ['Angular', 'Node.js', 'Express'],
  },
  {
    category: 'Tooling',
    items: ['Vite', 'Webpack', 'Docker', 'Git', 'GitHub Actions', 'Nx'],
  },
  {
    category: 'Platform',
    items: ['AWS', 'PostgreSQL', 'Redis', 'REST', `Firebase`, `MongoDB`],
  },
];

export const SOCIALS: SocialLink[] = [
  { label: 'GitHub', url: 'https://github.com/JoySalami-hub' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/damilola-salami-91b082231/' },
];
