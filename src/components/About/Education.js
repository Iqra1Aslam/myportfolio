import { ChevronRightIcon } from '@heroicons/react/solid';
import { motion } from 'framer-motion';

import kalingaLogo from '../../assets/images/kalinga-logo.png';

const Education = () => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.2, duration: 0.8 }}
    className="mt-14 md:mt-24 md:ml-3"
  >
    <div className="flex gap-3 ml-3 md:ml-0">
      <h2 className="text-2xl md:text-4xl">Education</h2>
      <div className="w-3/5 mb-3 border-b-2 border-secondaryColor hr-exprience" />
    </div>

    {/* Bachelor of IT Section */}
    <div className="mt-8 ml-2 md:ml-2">
      <div className="flex flex-col gap-5 mt-4 ml-3 text-lg text-secondaryColor edu-bhag md:flex-row md:ml-0">
        <h3>
          Bachelor of Information Technology
          <span className="block ml-1 text-sm text-skyColor">
            Nov 2020 – Nov 2024
          </span>
        </h3>
        <p>
          <img
            src={kalingaLogo}
            alt="microverse-logo"
            className="inline w-8"
          />
          {' '}
          University of the Punjab
          <span className="block text-sm text-skyColor">Regular</span>
        </p>
      </div>
      <ul className="ml-4 md:ml-0">
        <li className="flex gap-2 mt-4 text-base text-skyColor md:w-9/12">
          <ChevronRightIcon className="h-6" />
          <p>
            Developed a Food Delivery application using JavaScript and MySQL
            as a capstone project.
          </p>
        </li>
        <li className="flex gap-2 mt-2 text-base text-skyColor md:w-9/12">
          <ChevronRightIcon className="h-6" />
          <p>
            Gained expertise in software development, database management,
            and system design.
          </p>
        </li>
      </ul>
    </div>

    {/* Ride-Together App Section */}
    <div className="mt-8 md:ml-2">
      <div className="flex flex-col gap-5 mt-4 ml-4 text-lg md:flex-row text-secondaryColor edu-microverse md:ml-0">
        <h3>
          Ride-Together Android App
          <span className="block ml-1 text-sm text-skyColor">
            React Native, Node.js, Express.js, MongoDB
          </span>
        </h3>
        <p>
          Final Year Project
          <span className="block text-sm text-skyColor">Android App</span>
        </p>
      </div>

      <ul className="ml-4 md:ml-0">
        <li className="flex gap-2 mt-4 text-base text-skyColor md:w-9/12">
          <ChevronRightIcon className="h-6" />
          <p>
            Developed a full-stack ride-sharing mobile app that enables
            drivers and passengers to connect in real time.
          </p>
        </li>
        <li className="flex gap-2 mt-2 text-base text-skyColor md:w-9/12">
          <ChevronRightIcon className="h-6" />
          <p>
            Implemented booking and ride request features with push
            notifications using Firebase Cloud Messaging (FCM).
          </p>
        </li>
        <li className="flex gap-2 mt-2 text-base text-skyColor md:w-9/12">
          <ChevronRightIcon className="h-6" />
          <p>
            Backend built with Node.js and Express.js, with MongoDB for
            storing rides, user profiles, and bookings.
          </p>
        </li>
        <li className="flex gap-2 mt-2 text-base text-skyColor md:w-9/12">
          <ChevronRightIcon className="h-6" />
          <p>
            Used real-time geolocation and ride status updates to improve
            coordination between drivers and passengers.
          </p>
        </li>
      </ul>
    </div>
  </motion.div>
);

export default Education;
