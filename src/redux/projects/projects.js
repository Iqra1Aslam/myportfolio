import Memes from '../../assets/images/projects/memes.png';
import countfizz from '../../assets/images/countfizz.png';
import clipcraftor from '../../assets/images/clipcraftor.png';
// initial-state
const initialState = [
  {
    id: 0,
    title: "Countfizz",
    image: countfizz, // add your screenshot
    details:
    "A modern learning platform where students can complete lessons, earn certificates, and download worksheets as PDFs. Includes a progress dashboard to track student performance, completed lessons, and detailed analytics. Features a global leaderboard and automated weekly reports to monitor rankings and engagement, along with email sharing capabilities.",
    tech: ["React", "Node.js", "Express", "MongoDB", "React-PDF"],
    live: "https://www.countfizz.com",
    github: "https://github.com/yourusername/project",
  },
  {
    id: 1,
    title: "ClipCraftor",
    image: clipcraftor, // add your screenshot
    details:
    "A video generation platform that creates promo videos from images and clips using animations, transitions, and background music. Designed with optimized processing pipelines, including multithreading for faster rendering and rate limiting to ensure system stability under high load. Supports efficient cloud-based storage and delivery.",
    tech: ["Next.js", "Flask", "Python", "Cloud Storage"],
    live: "https://www.clipcraftor.com", // add link if available
    github: "https://github.com/yourusername/clipcraftor",
  },
  {
    id: 9,
    title: 'MemeHome',
    image: Memes,
    details:
      'This platform allows users to create, trade, and explore meme tokens on a decentralized blockchain (e.g., Solana) — with wallet login, on-chain interactions, and backend services for analytics, listing, and leaderboard-like features.',
    live: 'https://memehome-io-ten.vercel.app/',
    github: 'https://github.com/Iqra1Aslam/memehome.io',
    tech: ['Rust', 'Anchor', 'Web3.js', 'Express', 'React'],
  },
];

// reducer
const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default projectsReducer;
