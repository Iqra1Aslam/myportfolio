import { ChevronRightIcon } from '@heroicons/react/solid';
import { motion } from 'framer-motion';
import personJuggling from '../../assets/images/person_juggling.gif';
import codeSnipped from '../../assets/images/code-snippet.png';

const stacks = [
  {
    name: 'Front end development',
    values: ['React.js', 'React Native', 'JavaScript', 'HTML & CSS', 'Tailwind CSS', 'Redux'],
  },
  {
    name: 'Back end development',
    values: ['Node.js', 'Express.js', 'MongoDB', 'MySQL', 'FastAPI', 'REST APIs'],
  },
  {
    name: 'Blockchain & AI',
    values: ['Solana', 'Rust & Anchor', 'Web3.js', 'Smart Contracts', 'LLMs', 'Hugging Face'],
  },
  {
    name: 'Tools',
    values: ['Git & GitHub', 'Firebase', 'Socket.IO', 'Postman', 'VS Code', 'Vercel'],
  },
];

const AboutMe = () => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.1, duration: 0.8 }}
    className="mt-14 md:mt-24"
  >
    <div className="flex gap-3 ml-3 md:ml-0">
      <h2 className="text-2xl md:text-4xl">About Me</h2>
      <div className="w-3/5 mb-3 border-b-2 border-secondaryColor hr-about" />
    </div>

    <div className="flex flex-col gap-5 mt-5 ml-4 mr-5 text-base md:flex-row md:gap-10 lg:gap-20 text-skyColor md:ml-1 about-text">
      <div className="flex flex-col gap-5 md:mt-3">
        <p>
          Hi there! I&apos;m Iqra Aslam, a passionate
          {' '}
          <span className="text-secondaryColor">
            Full-Stack Developer
          </span>
          {' '}
          with hands-on experience building scalable web and mobile applications. I&apos;m currently working as an
          {' '}
          <span className="text-secondaryColor">
            AI & Full-Stack Developer
          </span>
          {' '}
          at
          {' '}
          <a
            href="https://sabasoftgames.com/"
            target="_blank"
            className="text-secondaryColor"
            rel="noreferrer"
          >
            SabaSoft Games Studio
          </a>
          , where I built a full MERN-stack learning platform for Grades 1–5 featuring gamified quizzes, voice-based storytelling, and real-time progress tracking.
        </p>
        <p>
          Before that, I worked as a
          {' '}
          <span className="text-secondaryColor">
            Blockchain Web Developer
          </span>
          {' '}
          at SabaSoft Games Studio, where I developed smart contracts in Rust &amp; Anchor and shipped a live Solana dApp. I love solving real problems through code — whether that&apos;s integrating AI with Gemini and LLMs, building real-time apps with Socket.IO, or crafting smooth React interfaces. When I&apos;m not coding, I&apos;m probably exploring how AI is reshaping the world.
          <img src={personJuggling} alt="person-juggling" className="w-16 mt-4" />
        </p>
      </div>

      <motion.img
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.8 }}
        src={codeSnipped}
        alt="code-snippet"
        className="rounded-md code-snippet"
      />
    </div>

    <h3 className="mt-5 ml-4 text-lg font-bold text-secondaryColor md:ml-1">
      Here are a few of my stacks I&apos;ve been working with recently:
    </h3>

    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.1, duration: 0.8 }}
      className="flex flex-col gap-4 mt-2 ml-4 md:flex-row md:gap-10 lg:gap-20 md:ml-2"
    >
      {stacks.map((stack) => (
        <div key={stack.name}>
          <h3 className="text-lg font-medium">{stack.name}</h3>
          {stack.values.map((value) => (
            <div key={value} className="flex gap-2 mt-2 text-base text-skyColor">
              <ChevronRightIcon className="h-6" />
              <p>{value}</p>
            </div>
          ))}
        </div>
      ))}
    </motion.div>
  </motion.div>
);

export default AboutMe;
