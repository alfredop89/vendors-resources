import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import "../scss/Carousel.scss";

const EmblaCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <motion.div className="embla"
    initial={{y:200, opcacity: 0}}
    whileInView={{y: 0, opcacity: 1}}
    transition={{duration: 0.5}}
    >
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          <Link to="https://drive.google.com/file/d/1ShT5CLoXcvRLBEf8LXtoad92xjIUsHdr/view">
            <div className="embla__slide">
              <img src="/src/public/Instagram post - 3.png" alt="" />
            </div>
          </Link>
          <Link to="https://www.canva.com/design/DAFvNvA3bW8/-QXgepCD3QAXOChJ8Vo-HQ/view?utm_content=DAFvNvA3bW8&utm_campaign=designshare&utm_medium=link&utm_source=editor">
            <div className="embla__slide">
              <img src="/src/public/Instagram post - 1.png" alt="" />
            </div>
          </Link>
        </div>
      </div>
        <button className="embla__prev" onClick={scrollPrev}>
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <button className="embla__next" onClick={scrollNext}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>

    </motion.div>
  );
};
export default EmblaCarousel;


