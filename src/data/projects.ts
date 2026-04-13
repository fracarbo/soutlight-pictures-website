export interface Project {
  title: string;
  category: string;
  year: string;
  image: string;
  logo: string;
  description?: string;
}

export const projects: Project[] = [
  {
    title: "A Father's Hand",
    category: 'Faith & Drama',
    year: 'In development',
    image: '/soutlight-pictures-website/films/a-fathers-hand/cover.png',
    logo: '/soutlight-pictures-website/films/a-fathers-hand/logo-dark.webp',
    description:
      'A deeply personal story of faith, forgiveness, and the enduring bond between a father and his child. When a man on the edge of despair finds himself confronted with the legacy of his own father, he must choose between the past that haunts him and the future he has yet to build.',
  },
  {
    title: 'The Lady In White',
    category: 'Horror',
    year: 'In development',
    image: '/soutlight-pictures-website/films/the-lady-in-white/cover.png',
    logo: '/soutlight-pictures-website/films/the-lady-in-white/logo.webp',
    description:
      'In a forgotten town cloaked in perpetual fog, a figure in white has haunted the marshlands for over a century. When a young woman inherits her grandmother\'s crumbling estate, she begins to uncover the chilling truth behind the legend — and why the Lady in White has been waiting for her.',
  },
  {
    title: 'Him, The Detective',
    category: 'Thriller & Crime',
    year: 'In development',
    image: '/soutlight-pictures-website/films/him-the-detective/cover.png',
    logo: '/soutlight-pictures-website/films/him-the-detective/logo.webp',
    description:
      'A veteran detective with a fractured past is pulled back into the shadows when a serial killer begins leaving messages meant only for him. As the line between hunter and hunted blurs, he must confront the darkest corners of his own psyche before the city pays the price.',
  },
];
