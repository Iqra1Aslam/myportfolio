import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import serverLogo from '../../assets/images/server-solid.svg';

const Project = (props) => {
  const {
    data: {
      id, image, title, details, tech, live,
    },
  } = props;
  let odd;
  if (id === 0 || id % 2 === 0) {
    odd = false;
  } else {
    odd = true;
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.1, duration: 0.8 }}
      className={`flex flex-col md:flex-row project-card ${id === 5 ? 'mt-16' : 'mt-24'} mx-4 md:mx-0 p-3 rounded-md shadow shadow-lightBlueColor md:gap-5 lg:gap-10 w-full max-w-full overflow-hidden min-w-0`}
    >
      <img
        src={image}
        alt="project preview"
        className={`w-full max-w-full h-auto ${odd ? 'md:order-1' : 'md:order-0'} rounded-md card-img`}
      />
      <div className="flex-1 min-w-0">
        <h3 className={`text-skyColor ${odd ? 'md:text-left' : 'md:text-right'} mt-3 md:mt-0 mb-4 text-2xl md:text-3xl ml-0`}>{title}</h3>
        <p className="w-full box-border p-4 text-base font-medium rounded bg-lightBlueColor text-skyColor break-words">
          {details}
        </p>
        <div className={`flex ${odd ? 'md:justify-center' : 'md:justify-end'} justify-start gap-2 text-skyColor mt-5 flex-wrap`}>
          {tech.map((item) => (
            <p key={item} className="px-2 py-1 border rounded border-lightBlueColor text-skyColor">{item}</p>
          ))}
        </div>
        <div className={`flex ${odd ? 'md:justify-start' : 'md:justify-end'} justify-start gap-5 text-skyColor mt-5`}>
          <a target="_blank" href={live} className="px-5 py-2 font-medium rounded bg-lightBlueColor text-md text-skyColor hover:bg-secondaryColor hover:text-primaryColor" rel="noreferrer">
            See Live
            <img src={serverLogo} className="inline w-5 mb-1 ml-2" alt="server-icon" />
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
