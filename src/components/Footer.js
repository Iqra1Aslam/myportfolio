import React from 'react';
import ContactInfo from './Contact/ContactInfo';

const goToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

const Footer = () => (

  <>
    <ContactInfo />
    <footer
      className="flex flex-col items-center my-8"
    >
      <button
        type="button"
        onClick={goToTop}
        aria-label="Save"
        className="px-4 py-2 my-10 font-medium rounded bg-lightBlueColor text-skyColor hover:bg-secondaryColor hover:text-primaryColor"
      >
        <i className="las la-angle-up" />
      </button>
    </footer>
  </>
);

export default Footer;
