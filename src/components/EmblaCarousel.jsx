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
          <Link to="/photo-bank/deco-54">
            <div className="embla__slide">
              <img src="/src/public/DECO54.png" alt="" />
            </div>
          </Link>
          <Link to="/photo-bank/decotile">
            <div className="embla__slide">
              <img src="/src/public/DECOTILE-1.png" alt="" />
            </div>
          </Link>
          <Link to="/photo-bank/hydrowood">
            <div className="embla__slide">
              <img src="/src/public/HYDROWOOD-1.png" alt="" />
            </div>
          </Link>
          <Link to="/photo-bank/keys">
            <div className="embla__slide">
              <img src="/src/public/KEYS.png" alt="" />
            </div>
          </Link>
          <Link to="/photo-bank/project">
            <div className="embla__slide">
              <img src="/src/public/PROJECT.png" alt="" />
            </div>
          </Link>
          <Link to="/photo-bank/quick48">
            <div className="embla__slide">
              <img src="/src/public/QUICK48-1.png" alt="" />
            </div>
          </Link>
          <Link to="/photo-bank/spirit-xl">
            <div className="embla__slide">
              <img src="/src/public/SPIRIT-XL-jpg.webp" alt="" />
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


