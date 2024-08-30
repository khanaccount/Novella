import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import s from "./index.module.scss";

import carousel1 from "assets/img/carousel1.jpg";
import carousel2 from "assets/img/carousel2.jpg";
import carousel3 from "assets/img/carousel3.jpg";
import carousel4 from "assets/img/carousel4.jpg";
import { ArrowSvg } from "./svg/Arrow";

const images: string[] = [carousel1, carousel2, carousel3, carousel4, carousel2];

export const Carousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    loop: true,
    slides: {
      origin: "center",
      perView: 3.5,
      spacing: 60,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setCurrentSlide(0);
    },
  });

  const handlePrev = () => {
    instanceRef.current?.prev();
  };
  const handleNext = () => {
    instanceRef.current?.next();
  };

  return (
    <>
      <section className={s.carouselBg}>
        <div className={`container ${s.carousel}`}>
          <div className={s.topInfo}>
            <h1 className={s.title}>Авторское решение</h1>
            <h5 className={s.text}>Novella вдохновляет дизайнеров</h5>
          </div>
        </div>
      </section>
      <section className={s.slider}>
        <div className="navigation-wrapper">
          <button className={s.arrowLeft} onClick={handlePrev}>
            <ArrowSvg />
          </button>
          <div ref={sliderRef} className="keen-slider">
            {images.map((src, idx) => (
              <div
                key={idx}
                className={`keen-slider__slide number-slide ${
                  currentSlide === idx ? "active-slide" : ""
                }`}
              >
                <img src={src} alt={`Slide ${idx + 1}`} />
              </div>
            ))}
          </div>
          <button className={s.arrowRight} onClick={handleNext}>
            <ArrowSvg />
          </button>
        </div>
        <div className={s.dots}>
          {[...Array(images.length).keys()].map((idx) => (
            <button
              key={idx}
              onClick={() => {
                instanceRef.current?.moveToIdx(idx);
              }}
              className={`${s.dot} ${currentSlide === idx ? s.active : ""}`.trim()}
            ></button>
          ))}
        </div>
      </section>
    </>
  );
};
