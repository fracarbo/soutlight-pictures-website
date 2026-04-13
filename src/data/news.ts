export interface NewsItem {
  title: string;
  publication: string;
  description: string;
  url: string;
  date: string;
}

export const news: NewsItem[] = [
  {
    title: "Meet Alex Caruso",
    publication: "CanvasRebel Magazine",
    description: "A conversation about Alex's journey from Italy to the US, his directorial philosophy on the horror film The Whistler, and his ambitions to explore genres from fantasy to drama.",
    url: "https://canvasrebel.com/meet-alex-caruso/",
    date: "In development",
  },
  {
    title: "Check Out Alex Caruso's Story",
    publication: "Voyage Ohio",
    description: "The story of a young filmmaker who immigrated from Sicily to Cleveland at 16, overcame language barriers and financial hardship, and found recognition through award-nominated horror short films.",
    url: "https://voyageohio.com/interview/check-out-alex-carusos-story/",
    date: "In development",
  },
  {
    title: "Meet Alex Caruso",
    publication: "Bold Journey",
    description: "Alex discusses building self-confidence through practice, his two award-winning horror shorts, and the qualities he believes are essential to success in filmmaking.",
    url: "https://boldjourney.com/meet-alex-caruso/",
    date: "In development",
  },
];
