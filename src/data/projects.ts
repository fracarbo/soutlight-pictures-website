export interface Project {
  title: string;
  category: string;
  year: string;
  image: string;
}

export const projects: Project[] = [
  {
    title: "A Father's Hand",
    category: 'Drama',
    year: '2024',
    image: 'https://images.pexels.com/photos/1666471/pexels-photo-1666471.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'The Lady In White',
    category: 'Supernatural Thriller',
    year: '2024',
    image: 'https://images.pexels.com/photos/2249528/pexels-photo-2249528.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Him, The Detective',
    category: 'Mystery Thriller',
    year: '2024',
    image: 'https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];
