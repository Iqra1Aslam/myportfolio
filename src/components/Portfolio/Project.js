import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import serverLogo from '../../assets/images/server-solid.svg';

const Project = (props) => {
  const {
    data: {
      id, image, title, details, tech, live,
    },
  } = props;

  const isOdd = id % 2 !== 0;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.1, duration: 0.8 }}
      className={`flex flex-col md:flex-row ${id === 5 ? 'mt-16' : 'mt-24'} w-full p-4 rounded-md shadow shadow-lightBlueColor md:gap-8 lg:gap-12 overflow-hidden`}
    >
      <div className={`w-full md:w-1/2 flex-shrink-0 ${isOdd ? 'md:order-2' : 'md:order-1'}`}>
        <img
          src={image}
          alt="project preview"
          className="w-full h-auto rounded-md object-cover"
        />
      </div>

      <div className={`w-full md:w-1/2 flex flex-col justify-center min-w-0 ${isOdd ? 'md:order-1' : 'md:order-2'}`}>
        <h3 className={`text-skyColor ${isOdd ? 'md:text-left' : 'md:text-right'} mt-4 md:mt-0 mb-4 text-2xl md:text-3xl`}>
          {title}
        </h3>

        <p className="w-full p-4 text-base font-medium rounded bg-lightBlueColor text-skyColor break-words">
          {details}
        </p>

        <div className={`flex flex-wrap gap-2 mt-5 ${isOdd ? 'md:justify-start' : 'md:justify-end'} justify-start`}>
          {tech.map((item) => (
            <p
              key={item}
              className="px-2 py-1 border rounded border-lightBlueColor text-skyColor text-sm"
            >
              {item}
            </p>
          ))}
        </div>

        <div className={`flex gap-5 mt-5 ${isOdd ? 'md:justify-start' : 'md:justify-end'} justify-start`}>
          <a
            target="_blank"
            href={live}
            rel="noreferrer"
            className="px-5 py-2 font-medium rounded bg-lightBlueColor text-md text-skyColor hover:bg-secondaryColor hover:text-primaryColor"
          >
            See Live
            <img
              src={serverLogo}
              className="inline w-5 mb-1 ml-2"
              alt="server-icon"
            />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

Project.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    details: PropTypes.string,
    live: PropTypes.string,
    tech: PropTypes.arrayOf(PropTypes.string),
    image: PropTypes.string,
  }).isRequired,
};

export default Project;
