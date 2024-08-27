import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import s from "./index.module.scss";

import logoBig from "assets/svg/logoBig.svg";
import arrowRight from "assets/svg/arrowRight.svg";
import mouse from "assets/svg/mouse.svg";
import headerBg1 from "assets/img/headerBg1.jpg";
import headerBg2 from "assets/img/headerBg2.jpg";
import headerBg3 from "assets/img/headerBg3.jpg";
import headerBg4 from "assets/img/headerBg4.jpg";
import headerBg5 from "assets/img/headerBg5.jpg";
import headerBg6 from "assets/img/headerBg6.jpg";

const images = [headerBg1, headerBg2, headerBg3, headerBg4, headerBg5, headerBg6];

export const Header: React.FC = () => {
  const [backgroundImage, setBackgroundImage] = useState(images[0]);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const scrollableHeight = document.body.scrollHeight - windowHeight;

    // Определение текущего процента прокрутки
    const scrollPercent = scrollY / scrollableHeight;

    // Количество процентов прокрутки, после которого меняется изображение
    const changeInterval = 0.01;

    // Определение текущего индекса изображения
    const index = Math.floor(scrollPercent / changeInterval) % images.length;

    // Обновляем фоновое изображение
    setBackgroundImage(images[index]);
  };

  useEffect(() => {
    const handleScrollEvent = () => {
      handleScroll();
    };

    window.addEventListener("scroll", handleScrollEvent);

    return () => window.removeEventListener("scroll", handleScrollEvent);
  }, []);

  return (
    <>
      <div className={s.headerBg} style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className={`container ${s.header}`}>
          <div className={s.nav}>
            <div className={s.leftBlock}>
              <NavLink to="/" className={s.logo}>
                <img src={logoBig} alt="logoBig" />
              </NavLink>
              <ul className={s.links}>
                <li>
                  <NavLink to="/apartments">квартиры</NavLink>
                </li>
                <li>
                  <NavLink to="/mortgage">Ипотека</NavLink>
                </li>
                <li>
                  <NavLink to="/вocuments">документы</NavLink>
                </li>
                <li>
                  <NavLink to="/contacts">контакты</NavLink>
                </li>
                <li>
                  <NavLink to="/valuation">оценка недвижимости</NavLink>
                </li>
              </ul>
            </div>
            <button className={s.number}>
              <img src={arrowRight} alt="arrowRight" />
              <p className={s.text}>
                +7 391 <span>271-40-20</span>
              </p>
            </button>
          </div>
          <div className={s.content}>
            <h1 className={s.title}>
              Спеццена: <br /> готовая 4‑комн 124 м² за 10,8 млн
            </h1>
            <p className={s.text}>рядом с центром Красноярска</p>
          </div>
        </div>
      </div>
      <div className={s.bottomBg}>
        <div className={s.scrollBlock}>
          <div className={s.findMoreBtn}>
            <div className={s.btnBg}></div>
            <button className={s.btn}>Узнать больше</button>
          </div>
          <div className={s.scrollInfo}>
            <button className={s.btn}>
              <img src={mouse} alt="mouse" />
            </button>
            <p className={s.text}>
              Novella начинается на улице Копылова, 19. Рядом с центром Красноярска, в красивом
              месте с видом на город и Енисей.
            </p>
          </div>
        </div>
        <h5 className={s.bottomInfo}>
          Каждый из нас — автор истории собственной жизни. А чтобы случиться, любой истории нужно
          подходящее место. В Красноярске мы нашли идеальное место для по-настоящему счастливого
          сюжета. Это Дом Novella.
        </h5>
      </div>
    </>
  );
};
