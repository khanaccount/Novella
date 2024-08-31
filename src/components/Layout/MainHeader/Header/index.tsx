import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

import s from "./index.module.scss";

import logoBig from "assets/svg/logoBig.svg";

import arrowRight from "assets/svg/arrowRight.svg";
import mouse from "assets/svg/mouse.svg";

import logoMobile from "assets/svg/headerMobileLogo.svg";
import headerPhone from "assets/svg/headerMobilePhone.svg";
import headerOpen from "assets/svg/headerMobileOpen.svg";
import headerMobileCross from "assets/svg/headerMobileCross.svg";

interface HeaderProps {
  openModal: () => void;
  toggleBurgerMenu: () => void;
  isBurgerMenuOpen: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  openModal,
  toggleBurgerMenu,
  isBurgerMenuOpen,
}) => {
  return (
    <>
      <div id="Top" className={s.headerBg}>
        <div className={s.navMobileBg}>
          <div className="container">
            <div className={s.navMobile}>
              <NavLink to="/" className={s.logoMobile}>
                <img src={logoMobile} alt="logoBig" />
              </NavLink>
              <div className={s.btns}>
                <a href="tel:+73912714020" className={s.callButton}>
                  <button>
                    <img src={headerPhone} alt="headerPhone" />
                  </button>
                </a>
                <button onClick={toggleBurgerMenu}>
                  {isBurgerMenuOpen ? (
                    <img src={headerMobileCross} alt="headerMobileCross" />
                  ) : (
                    <img src={headerOpen} alt="headerOpen" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
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
            <button className={s.btn} onClick={openModal}>
              Узнать больше
            </button>
          </div>
          <div className={s.scrollInfo}>
            <Link to="nextSection" smooth={true} offset={-10} duration={500} className={s.btn}>
              <img src={mouse} alt="mouse" className={s.mouseAnimation} />
            </Link>

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
        <h5 className={s.bottomInfoModal}>
          Каждый из нас — автор истории собственной жизни. А чтобы случиться, любой истории нужно
          подходящее место.
          <br />
          <br />В Красноярске мы нашли идеальное место для по-настоящему счастливого сюжета. Это Дом
          Novella.
        </h5>
      </div>
    </>
  );
};
