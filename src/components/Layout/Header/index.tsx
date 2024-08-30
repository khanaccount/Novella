import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import s from "./index.module.scss";

import logoBig from "assets/svg/logoBig.svg";
import logoFixed from "assets/svg/logo.svg";
import arrowRight from "assets/svg/arrowRight.svg";
import mouse from "assets/svg/mouse.svg";
import crossModal from "assets/svg/headerModalCross.svg";

const validationSchema = Yup.object({
  name: Yup.string().required("Обязательно"),
  phone: Yup.string()
    .matches(/^\+?[1-9]\d{1,14}$/, "Неверный номер телефона")
    .required("Обязательно"),
});

export const Header: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
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
      <div id="Top" className={s.headerBg}>
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
            <button onClick={openModal} className={s.btn}>
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
      </div>
      <div className={isModalOpen ? s.subscribeModalBg : s.subscribeModalBgClosed}>
        <div className={s.blockBg}>
          <button className={s.closeModalBtn} onClick={closeModal}>
            <img src={crossModal} alt="closeModal" />
          </button>
          <Formik
            initialValues={{ name: "", phone: "" }}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
              console.log("Submitted values:", values);
              resetForm();
              closeModal();
            }}
          >
            <Form className={s.form}>
              <Field id="name" name="name" type="text" placeholder="Ваше имя" className={s.input} />
              <ErrorMessage name="name" component="div" />

              <Field
                id="phone"
                name="phone"
                type="text"
                placeholder="Телефон"
                className={s.input}
              />
              <ErrorMessage name="phone" component="div" />

              <div className={s.checkboxButton}>
                <Field type="checkbox" name="checkbox" id="confirm" className={s.checkboxInput} />
                <label htmlFor="confirm" className={s.checkboxText}>
                  Я согласен на обработку моих персональных данных
                </label>
                <ErrorMessage name="checkbox" component="div" className={s.error} />
              </div>

              <div className={s.subscribBtn}>
                <div className={s.btnBg}></div>
                <button type="submit" className={s.btn}>
                  отправить
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
};
