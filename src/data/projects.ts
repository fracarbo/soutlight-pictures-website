export interface Project {
  title: string;
  category: string;
  year: string;
  image: string;
  logo: string;
}

export const projects: Project[] = [
  {
    title: "A Father's Hand",
    category: 'Faith & Drama',
    year: 'In development',
    image: '/soutlight-pictures-website/films/a-fathers-hand/cover.png',
    logo: '/soutlight-pictures-website/films/a-fathers-hand/logo-dark.webp',
  },
  {
    title: 'The Lady In White',
    category: 'Horror',
    year: 'In development',
    image: '/soutlight-pictures-website/films/the-lady-in-white/cover.png',
    logo: '/soutlight-pictures-website/films/the-lady-in-white/logo.webp',
  },
  {
    title: 'Him, The Detective',
    category: 'Thriller & Crime',
    year: 'In development',
    image: '/soutlight-pictures-website/films/him-the-detective/cover.png',
    logo: '/soutlight-pictures-website/films/him-the-detective/logo.webp',
  },
];
