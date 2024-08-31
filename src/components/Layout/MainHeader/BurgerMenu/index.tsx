import React from "react";
import { NavLink } from "react-router-dom";
import s from "./index.module.scss";

import burgerLocation from "assets/svg/footerCordinateSvg.svg";
import footerVk from "assets/svg/footerVk.svg";
import footerYouTube from "assets/svg/footerYouTube.svg";
import footerOdnoclass from "assets/svg/footerOdnoclass.svg";
import footerTg from "assets/svg/footerTg.svg";
import logoMobile from "assets/svg/headerMobileLogo.svg";
import headerPhone from "assets/svg/headerMobilePhone.svg";
import headerOpen from "assets/svg/headerMobileOpen.svg";
import headerMobileCross from "assets/svg/headerMobileCross.svg";

type SocialMedia = {
  svg: string;
  id: number;
  link: string;
};

const socialMedia: SocialMedia[] = [
  { svg: footerVk, id: 1, link: "https://vk.com/" },
  { svg: footerYouTube, id: 2, link: "https://www.youtube.com/" },
  { svg: footerOdnoclass, id: 3, link: "https://ok.ru/" },
  { svg: footerTg, id: 4, link: "https://web.telegram.org/" },
];

interface BurgerMenuProps {
  isBurgerMenuOpen: boolean;
  toggleBurgerMenu: () => void;
}

export const BurgerMenu: React.FC<BurgerMenuProps> = ({ isBurgerMenuOpen, toggleBurgerMenu }) => {
  return (
    <div className={`${s.burgerMenu} ${isBurgerMenuOpen ? s.open : s.closing}`}>
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
      <div className="containerBurger">
        <ul className={s.links}>
          <li>
            <NavLink to="/builders">застройщик</NavLink>
          </li>
          <li>
            <NavLink to="/apartments">Квартиры</NavLink>
          </li>
          <li>
            <NavLink to="/mortgage">Ипотека</NavLink>
          </li>
          <li>
            <NavLink to="/docs">Документы</NavLink>
          </li>
          <li>
            <NavLink to="/contacts">контакты</NavLink>
          </li>
        </ul>
      </div>
      <div className={s.burgerMenuFooter}>
        <div className="containerBurger">
          <div className={s.logoBlock}>
            <img src={burgerLocation} alt="burgerLocation" />
            <p className={s.office}>Офис продаж:</p>
          </div>
          <div className={s.logoText}>
            <p className={s.number}>
              +7 391 <span>271-40-20</span>
            </p>
          </div>
          <p className={s.address}>г. Красноярск,</p>
          <p className={s.address}> ул. Молокова д. 1 копр. 1, оф. 178, 1 этаж</p>
          <p className={s.schedule}>График работы офиса продаж:</p>
          <p className={s.openingHours}>
            В будни с 9:00 до 18:00 <br />
            Суббота воскресенье выходной
          </p>
          <div className={s.socialMedia}>
            {socialMedia.map((item) => (
              <a className={s.socialIcons} key={item.id} href={item.link}>
                <img src={item.svg} alt={item.svg} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
