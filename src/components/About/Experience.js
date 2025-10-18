import { ChevronRightIcon } from '@heroicons/react/solid';
import { motion } from 'framer-motion';
import freelanceLogo from '../../assets/images/freelance-logo.jpg';

const Experience = () => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.2, duration: 0.8 }}
    className="mt-14 md:mt-24 md:ml-1"
  >
    <div className="flex gap-3 ml-3 md:ml-0">
      <h2 className="text-2xl md:text-4xl">Experience</h2>
      <div className="w-3/5 mb-3 border-b-2 border-secondaryColor hr-exprience" />
    </div>

    <div className="mt-8 md:ml-1">
      <div className="flex flex-col gap-5 mt-4 ml-4 text-lg md:flex-row text-secondaryColor md:gap-[445px] md:ml-0">
        <h3>
          BlockChain Web Developer
          <span className="block ml-1 text-sm text-skyColor">January 2025 – Present</span>
        </h3>
        <p className="md:mr-3">
          <img src={freelanceLogo} alt="microverse-logo" className="inline w-8" />
          {' '}
          SabaSoft Games Studio
          {/* <span className="block text-sm text-skyColor"></span> */}
        </p>
      </div>
      <ul className="ml-4 md:ml-0">
        <li className="flex gap-2 mt-4 text-base text-skyColor">
          <ChevronRightIcon className="h-6" />
          <p>
            Built a Solana-based decentralized app (MemeHome) enabling meme token creation
            and trading.
          </p>
        </li>
        <li className="flex gap-2 mt-2 text-base text-skyColor">
          <ChevronRightIcon className="h-6" />
          <p>
            Developed smart contracts using Rust and Anchor; integrated Web3.js with a
            React-based frontend.
          </p>
        </li>
        <li className="flex gap-2 mt-2 text-base text-skyColor">
          <ChevronRightIcon className="h-6" />
          <p>
            Implemented backend using Express.js to manage user accounts and token-related data.
          </p>
        </li>
      </ul>
    </div>
  </motion.div>
);

export default Experience;
