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
          <Link to="https://drive.google.com/file/d/1Zg3B41bWC-aOdpWwOCzXUDtZMs2jGWwS/view?usp=drive_link">
            <div className="embla__slide">
              <img src="/public/DECO54.png" alt="" />
            </div>
          </Link>
          <Link to="https://drive.google.com/file/d/1RiI2TrMyZirytkQK4H9ZqwNKvLI-B0gj/view?usp=drive_link">
            <div className="embla__slide">
              <img src="/public/DECOTILE-1.png" alt="" />
            </div>
          </Link>
          <Link to="https://cpffloors.com/wp-content/uploads/2023/09/Diptico-New-Sell-Sheet-HYDROWOOD-WEB-1.pdf">
            <div className="embla__slide">
              <img src="/public/HYDROWOOD-1.png" alt="" />
            </div>
          </Link>
          <Link to="https://drive.google.com/file/d/1e1NYj0PrUHeHcffhF5fmlHf1j-HEbxwm/view?usp=drive_link">
            <div className="embla__slide">
              <img src="/public/KEYS.png" alt="" />
            </div>
          </Link>
          <Link to="https://drive.google.com/file/d/1n_N3retw9PhmrNFuHBYYTC2JE7z-wwG4/view?usp=drive_link">
            <div className="embla__slide">
              <img src="/public/PROJECT.png" alt="" />
            </div>
          </Link>
          <Link to="https://drive.google.com/file/d/12Ckn0IgW74tlFcYzbGbwYlqMNbg1dyui/view?usp=drive_link">
            <div className="embla__slide">
              <img src="/public/QUICK48-1.png" alt="" />
            </div>
          </Link>
          <Link to="https://drive.google.com/file/d/1RlDNlhI2v3OzBmoBrVWV3B2EqJ6ywsjI/view?usp=drive_link">
            <div className="embla__slide">
              <img src="/SPIRIT-XL-jpg.webp" alt="" />
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


