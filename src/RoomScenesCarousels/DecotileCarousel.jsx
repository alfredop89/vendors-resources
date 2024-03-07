import React, { useRef, useCallback } from "react";
import { useState } from "react";

import useEmblaCarousel from "embla-carousel-react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

import { AnimatePresence, motion } from "framer-motion";
import "../scss/Carousel.scss";
import "../scss/ModalCarousel.scss"

const RoomSceneDeco54 = () => {
  //MODAL CAROUSEL

  const [openModal, SetOpenModal] = useState(false);

  //

  const [emblaRef, emblaApi] = useEmblaCarousel();

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <>
      <motion.div
        className="embla"
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container" style={{ cursor: "zoom-in" }}>
            <div className="embla__slide">
              <img
                src="https://dealers.cpffloors.com/wp-content/uploads/2024/02/UMA-ROOM-SCENE-1200x1200-1.webp"
                alt=""
                onClick={() => SetOpenModal(!openModal)}
              />
            </div>

            <div className="embla__slide">
              <img
                src="https://dealers.cpffloors.com/wp-content/uploads/2024/02/MIA-ROOM-SCENE-1200x1200-1.webp"
                alt=""
                onClick={() => SetOpenModal(!openModal)}
              />
            </div>

            <div className="embla__slide">
              <img
                src="https://dealers.cpffloors.com/wp-content/uploads/2024/02/MAI-ROOM-SCENE-1200x1200-1.webp"
                alt=""
                onClick={() => SetOpenModal(!openModal)}
              />
            </div>

            <div className="embla__slide">
              <img
                src="https://dealers.cpffloors.com/wp-content/uploads/2024/02/LIA-ROOM-SCENE-1200x1200-1.webp"
                alt=""
                onClick={() => SetOpenModal(!openModal)}
              />
            </div>

            <div className="embla__slide">
              <img
                src="https://dealers.cpffloors.com/wp-content/uploads/2024/02/IVY-ROOM-SCENE-1200x1200-1.webp"
                alt=""
                onClick={() => SetOpenModal(!openModal)}
              />
            </div>

            <div className="embla__slide">
              <img
                src="https://dealers.cpffloors.com/wp-content/uploads/2024/02/ELI-ROOM-SCENE-1200x1200-1.webp"
                alt=""
                onClick={() => SetOpenModal(!openModal)}
              />
            </div>
          </div>
        </div>

        <div className="buttons">
          <button className="embla__prev" onClick={scrollPrev}>
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <button className="embla__next" onClick={scrollNext}>
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </motion.div>

      {/* MODAL CAROUSEL */}

      <AnimatePresence initial={false}>
        {openModal && (
          <>
            <motion.div
              className="modal-carousel"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div
                className="close-modal-carousel"
                onClick={() => SetOpenModal(false)}
              >
                <i className="fa-solid fa-xmark"></i>
              </div>

              {/*CAROUSEL*/}

              <Swiper
                spaceBetween={30}
                effect={"fade"}
                navigation={true}
                pagination={{
                  clickable: true,
                }}
                modules={[EffectFade, Navigation, Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img src="https://dealers.cpffloors.com/wp-content/uploads/2024/02/UMA-ROOM-SCENE-1200x1200-1.webp" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://dealers.cpffloors.com/wp-content/uploads/2024/02/MIA-ROOM-SCENE-1200x1200-1.webp" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://dealers.cpffloors.com/wp-content/uploads/2024/02/MAI-ROOM-SCENE-1200x1200-1.webp" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://dealers.cpffloors.com/wp-content/uploads/2024/02/LIA-ROOM-SCENE-1200x1200-1.webp " />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://dealers.cpffloors.com/wp-content/uploads/2024/02/IVY-ROOM-SCENE-1200x1200-1.webp" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://dealers.cpffloors.com/wp-content/uploads/2024/02/ELI-ROOM-SCENE-1200x1200-1.webp" />
                </SwiperSlide>
              </Swiper>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
export default RoomSceneDeco54;
