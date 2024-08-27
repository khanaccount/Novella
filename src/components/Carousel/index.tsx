import React from "react";

import s from "./index.module.scss";

export const Carousel: React.FC = () => {
  return (
    <section className={s.carouselBg}>
      <div className={`container ${s.carousel}`}>
        <div className={s.topInfo}>
          <h1 className={s.title}>Авторское решение</h1>
          <h5 className={s.text}>Novella вдохновляет дизайнеров</h5>
        </div>
      </div>
    </section>
  );
};
