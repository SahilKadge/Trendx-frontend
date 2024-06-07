import { useState, useEffect, useCallback } from "react";
import PropTypes from 'prop-types';
import './ImageSlider.css';
import { AnimatePresence, motion } from 'framer-motion';

const variants = {
  initial: (direction) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  animate: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? '-100%' : '100%',
    opacity: 0,
  }),
};

export const ImageSlider = ({ images, intervalTime = 3000 }) => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextStep = useCallback(() => {
    setDirection(1);
    setIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  }, [images.length]);

  const prevStep = useCallback(() => {
    setDirection(-1);
    setIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  }, [images.length]);

  useEffect(() => {
    const interval = setInterval(nextStep, intervalTime);
    return () => clearInterval(interval);
  }, [nextStep, intervalTime]);

  const handlePrevStep = () => {
    clearInterval();
    prevStep();
  };

  const handleNextStep = () => {
    clearInterval();
    nextStep();
  };

  return (
    <div className="container">
      <div className="slideshow">
        <AnimatePresence initial={false} custom={direction}>
          <a href={images[index].href} key={images[index].href}>
            <motion.img
              key={index}
              src={images[index].url}
              alt="slides"
              className="slides"
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              custom={direction}
            />
          </a>
        </AnimatePresence>
        <button className="prevButton" onClick={handlePrevStep}>prev</button>
        <button className="nextButton" onClick={handleNextStep}>next</button>
      </div>
    </div>
  );
};

ImageSlider.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired
    })
  ).isRequired,
  intervalTime: PropTypes.number,
};
