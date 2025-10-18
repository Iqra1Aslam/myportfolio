import chatbotApp from '../../assets/images/projects/chatbot.png';
import Memes from '../../assets/images/projects/memes.png';
// initial-state
const initialState = [
  {
    id: 0,
    title: 'ChatBot App',
    image: chatbotApp,
    details:
      'This ChatBot app allows users to choose between AI-powered replies or manual review. It offers a real-time chat experience that feels like talking to a smart assistant. Users begin by selecting their gender, then choose their preferred chat mode, making the interaction more personalized. The app is live and designed to be simple, interactive, and user-friendly while combining AI with everyday usability.',
    live: 'https://chat-bot-app-flax.vercel.app/',
    github: 'https://github.com/Iqra1Aslam/chatBotApp',
    tech: ['JavaScript', 'React', 'AIModel', 'Tailwind'],
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
