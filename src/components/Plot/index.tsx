import React from "react";

import s from "./index.module.scss";

import plot1Svg from "assets/svg/plot1.svg";
import plot2Svg from "assets/svg/plot2.svg";
import plot3Svg from "assets/svg/plot3.svg";
import plot1 from "assets/img/plot1.jpg";
import plot2 from "assets/img/plot2.jpg";
import plot3 from "assets/img/plot3.jpg";

type CardData = {
  svg: string;
  svgBgClass: string;
  title: string;
  description: string;
  img: string;
};

const cardData: CardData[] = [
  {
    svg: plot1Svg,
    svgBgClass: s.svgBg1,
    title: "Технология строительства",
    description:
      "Дом построен из кирпича, ширина стен — 1 метр. Чтобы Novella гармонично вписалась в архитектурный ансамбль города, использован навесной фасад в пастельных зеленых оттенках.",
    img: plot1,
  },
  {
    svg: plot2Svg,
    svgBgClass: s.svgBg2,
    title: "Безопасный двор",
    description:
      "У дома оборудована воркаут-зона и две игровые площадки: внутри двора расположена площадка для малышей, рядом — большая площадка для детей постарше. От улицы Копылова они закрыты шумоподавляющим ограждением.",
    img: plot2,
  },
  {
    svg: plot3Svg,
    svgBgClass: s.svgBg3,
    title: "Подъезды",
    description:
      "В каждом подъезде оборудовано место для консьержа и установлены современные лифты. Дизайн холлов выполнен в классическом стиле, лестницы отделаны практичным керамогранитом.",
    img: plot3,
  },
];

export const Plot: React.FC = () => {
  return (
    <section className={s.plotBg}>
      <div className={`container ${s.plot}`}>
        <div className={s.topInfo}>
          <h1 className={s.title}>Классический сюжет</h1>
          <h5 className={s.text}>Novella — дом в лучших традициях комфорт-класса</h5>
        </div>
        <div className={s.blocks}>
          {cardData.map((card, index) => (
            <div className={s.block} key={index}>
              <div className={s.topTitle}>
                <span className={card.svgBgClass}>
                  <img src={card.svg} alt={`plot${index + 1}Svg`} />
                </span>
                <h5 className={s.text}>{card.title}</h5>
              </div>
              <div className={s.infoText}>
                <p>{card.description}</p>
              </div>
              <div className={s.blockImg}>
                <img src={card.img} alt={`plot${index + 1}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
