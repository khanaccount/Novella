import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import s from "./index.module.scss";

import logoFixed from "assets/svg/logo.svg";
import arrowRight from "assets/svg/arrowRight.svg";

export const FixedHeader: React.FC = () => {
  const [isFixed, setIsFixed] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 170) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={isFixed ? s.headerBgFixed : s.headerBgHidden}>
      <div className={`container ${s.headerFixed}`}>
        <div className={s.nav}>
          <div className={s.leftBlock}>
            <NavLink to="/" className={s.logo}>
              <img src={logoFixed} alt="logoFixed" />
            </NavLink>
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
          <button className={s.number}>
            <img src={arrowRight} alt="arrowRight" />
            <p className={s.text}>
              +7 391 <span>271-40-20</span>
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};
