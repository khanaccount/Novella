import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import s from "./index.module.scss";

import footerLogo from "assets/svg/footerLogo.svg";

import footerVk from "assets/svg/footerVk.svg";
import footerYouTube from "assets/svg/footerYouTube.svg";
import footerOdnoclass from "assets/svg/footerOdnoclass.svg";
import footerTg from "assets/svg/footerTg.svg";

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

const validationSchema = Yup.object({
  email: Yup.string().email("Некорректный email адрес").required("Email обязательное поле"),
  checkbox: Yup.boolean()
    .oneOf([true], "Необходимо согласие на обработку данных")
    .required("Необходимо согласие на обработку данных"),
});

export const Footer: React.FC = () => {
  return (
    <div id="footer" className={s.footerBg}>
      <div className={`container ${s.footer}`}>
        <div className={s.leftBlock}>
          <div className={s.logoInfo}>
            <img src={footerLogo} alt="footerLogo" />
            <div className={s.logoText}>
              <p className={s.office}>Офис продаж:</p>
              <p className={s.number}>
                +7 391 <span>271-40-20</span>
              </p>
            </div>
          </div>
          <p className={s.address}>г. Красноярск,</p>
          <p className={s.address}> ул. Молокова д. 1 копр. 1, оф. 178, 1 этаж</p>
          <p className={s.schedule}>График работы офиса продаж:</p>
          <p className={s.openingHours}>В будни с 9:00 до 18:00 Суббота, воскресенье выходной</p>

          <div className={s.socialMedia}>
            {socialMedia.map((item) => (
              <a className={s.socialIcons} key={item.id} href={item.link}>
                <img src={item.svg} alt={item.svg} />
              </a>
            ))}
          </div>
        </div>
        <div className={s.rightBlock}>
          <h5 className={s.title}>Хочу первым узнавать новости</h5>

          <Formik
            initialValues={{ email: "", checkbox: false }}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
              console.log(values);
              resetForm();
            }}
          >
            {() => (
              <Form className={s.subscribForm}>
                <div className={s.subscribForm}>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Введите Email"
                    className={s.emaiInput}
                  />
                  <ErrorMessage name="email" component="div" className={s.error} />
                  <div className={s.subscribBtn}>
                    <div className={s.btnBg}></div>
                    <button type="submit" className={s.btn}>
                      подписаться
                    </button>
                  </div>
                </div>
                <div className={s.checkboxButton}>
                  <Field type="checkbox" name="checkbox" id="confirm" className={s.checkboxInput} />
                  <label htmlFor="confirm" className={s.checkboxText}>
                    Я согласен на обработку моих персональных данных
                  </label>
                  <ErrorMessage name="checkbox" component="div" className={s.error} />
                </div>
              </Form>
            )}
          </Formik>
          <p className={s.publicOffer}>
            Вся размещенная информация на сайте носит исключительно информационный характер и ни при
            каких условиях не является публичной офертой, определяемой положениями статьи 437 ГК РФ.
            Визуализации объектов являются ориентировочными. Застройщик вправе вносить изменения в
            проекты в соответствии с действующим законодательством. Вся размещенная информация на
            сайте носит исключительно информационный характер и ни при каких условиях не является
            публичной офертой, определяемой положениями статьи 437 ГК РФ.
          </p>
        </div>
      </div>
    </div>
  );
};
