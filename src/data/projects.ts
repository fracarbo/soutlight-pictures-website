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
    image: '/films/a-fathers-hand/cover.png',
    logo: '/films/a-fathers-hand/logo-dark.webp',
    description:
      'A deeply moving story inspired by true events — an intimate exploration of faith, purpose, and the quiet power of compassion. At its heart lies the journey of a devoted priest who, against all odds, chooses to stand beside a troubled young girl when the world has all but turned away from her. The film unfolds as a testament to unwavering belief — not just in God, but in humanity itself. Rich with emotional depth, A Father\'s Hand is more than a story — it\'s a reflection on love that endures, forgiveness that heals, and the quiet strength it takes to do what is right when it is hardest.',
  },
  {
    title: 'The Lady In White',
    category: 'Horror',
    year: 'In development',
    image: '/films/the-lady-in-white/cover.png',
    logo: '/films/the-lady-in-white/logo.webp',
    description:
      'For over two centuries, a shadow has clung to the streets of Benton — a curse never broken. When night falls, she appears… a woman in white, drifting through the darkness, searching for something lost. No one knows what she truly wants. Only that when she finds you, it\'s already too late. When a family moves from Seattle to Benton, they must confront an ancient evil that feeds on fear, grief, and the past itself… or risk losing their children to it forever. The Lady in White is a chilling descent into dread — where suspense bleeds into the supernatural, and the line between the living and the damned slowly disappears.',
  },
  {
    title: 'Him, The Detective',
    category: 'Thriller & Crime',
    year: 'In development',
    image: '/films/him-the-detective/cover.png',
    logo: '/films/him-the-detective/logo.webp',
    description:
      'Gideon Black is a former CIA operative. A man forged in shadows, trained to see what others miss, and to act without hesitation. But when a string of brutal homicides begins to surface, something about them feels… personal. Drawn back into a world he thought he left behind, Gideon sets out to hunt the one pulling the strings — the head of the snake. Yet the deeper he digs, the more the lines begin to blur. Allies become suspects. Truth turns into illusion. And the past he buried long ago begins to claw its way back into the light. A journey into betrayal, memory, and the cost of secrets that refuse to stay hidden. Will Gideon Black uncover the truth… or become just another piece of it?',
  },
];
