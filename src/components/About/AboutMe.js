import { ChevronRightIcon } from '@heroicons/react/solid';
import { motion } from 'framer-motion';
import personJuggling from '../../assets/images/person_juggling.gif';
import codeSnipped from '../../assets/images/code-snippet.png';

const stacks = [
  {
    name: 'Front end development', values: ['React JS', 'ReactNative', 'JavaScript', 'HTML & CSS', 'Tailwind'],
  },
  {
    name: 'Back end development', values: ['Node.js', 'Express.js', 'MongoDB', 'SQL'],
  },
  {
    name: 'Tools', values: ['Vercel', 'Github & Git', 'Postman', 'VS Code'],
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
    <div className="flex flex-col gap-5 mt-5 ml-4 mr-5 text-base md:flex-row text-skyColor md:ml-1 about-text">
      <div className="flex flex-col gap-5 md:mt-3">
        <p>
          Hi there! I&apos;m Iqra Aslam, but you might know me as
          {' '}
          <span className="text-secondaryColor">thecodechaser</span>
          . I&apos;m  currently working as a Blockchain Web Developer at&nbsp;
          <a href="https://sabasoftgames.com/" target="_blank" className="text-secondaryColor" rel="noreferrer">SabaSoftgames</a>
          , where I combine my skills in web technologies and blockchain
          to build secure and scalable applications. I&apos;m also a passionate
          Web &amp; Mobile Developer with experience in React Native and the MERN stack.
        </p>
        <p>
          I enjoy tackling challenging coding problems because they keep things interesting,
          which makes me a pretty good problem solver. When I have some free time, I usually
          have a hard time deciding between solving algorithms or learning about astronomy—but
          somehow I manage to do a bit of both.
          {' '}
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
    <h3 className="mt-5 ml-4 text-lg font-bold text-secondaryColor md:ml-1">Here are few of my stacks I&apos;ve been working with recently:</h3>
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.1, duration: 0.8 }}
      className="flex flex-col gap-4 mt-2 ml-4 md:flex-row md:gap-56 md:ml-2"
    >
      { stacks.map((stack) => (
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
