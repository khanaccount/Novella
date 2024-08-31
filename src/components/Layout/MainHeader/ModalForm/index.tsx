import React from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import s from "./index.module.scss";

import crossModal from "assets/svg/headerModalCross.svg";

const validationSchema = Yup.object({
  name: Yup.string().required("Обязательно"),
  phone: Yup.string()
    .matches(/^\+?[1-9]\d{1,14}$/, "Неверный номер телефона")
    .required("Обязательно"),
});

interface ModalFormProps {
  isModalOpen: boolean;
  closeModal: () => void;
}

export const ModalForm: React.FC<ModalFormProps> = ({ isModalOpen, closeModal }) => {
  return (
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

            <Field id="phone" name="phone" type="text" placeholder="Телефон" className={s.input} />
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
  );
};
