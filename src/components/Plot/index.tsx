import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import s from "./index.module.scss";

import scrollTop from "assets/svg/scrollTop.svg";
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
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const plotElement = document.getElementById("plot");
      if (plotElement) {
        const rect = plotElement.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Кнопка должна быть видна, если верх элемента #plot находится ниже нуля
        // или если элемент частично виден в нижней части экрана

        if (rect.top < windowHeight && rect.bottom > 0) {
          setShowScrollTop(true);
        } else if (rect.top >= windowHeight) {
          // Скрыть кнопку, если элемент полностью прокручивается выше экрана
          setShowScrollTop(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Выполняем проверку при монтировании компонента
    handleScroll();
    // Удаляем слушатель события при размонтировании компонента
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="plot" className={s.plotBg}>
      <div className={s.topInfoMobile}>
        <h1 className={s.title}>Классический сюжет</h1>
        <div className={s.plotMobileBg}>
          <h5 className={s.text}>Novella — дом в лучших традициях комфорт-класса</h5>
        </div>
      </div>
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
                <h5 className={s.textMobile}>{card.title}</h5>
                <p>{card.description}</p>
              </div>
              <div className={s.blockImg}>
                <img src={card.img} alt={`plot${index + 1}`} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {showScrollTop && (
        <Link className={s.scrollTop} to="Top" smooth={true} offset={-10} duration={500}>
          <img src={scrollTop} alt="scrollTop" />
        </Link>
      )}
    </section>
  );
};
