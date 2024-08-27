import React from "react";

import s from "./index.module.scss";

import promo1 from "assets/img/promo1.png";
import promo2 from "assets/img/promo2.png";
import promo1Svg from "assets/svg/promo1.svg";
import promo2Svg from "assets/svg/promo2.svg";
import promo3Svg from "assets/svg/promo3.svg";

export const Promo: React.FC = () => {
  return (
    <section className={s.promoBg}>
      <div className={`container ${s.promo}`}>
        <div className={s.blocks}>
          <div className={s.block1}>
            <div className={s.img}>
              <img src={promo1} alt="promo1" />
            </div>
          </div>
          <div className={s.text1}>
            <img src={promo1Svg} alt="promo1Svg" />
            <h5 className={s.title}>Близость к центру города</h5>
            <p className={s.info}>
              Дом расположен в непосредственной близости к центру города, который открывает массу
              возможностей для отдыха и культурного времяпровождения. Театры, кафе и рестораны,
              набережная реки Енисей, Центральный парк, да и просто прогулки по оживленным улицам
              центра станут неотъемлемой частью вашей жизни. Ведь все близко.
            </p>
          </div>
        </div>
        <div className={s.blocks}>
          <div className={s.text1}>
            <img src={promo2Svg} alt="promo2Svg" />
            <h5 className={s.title2}>Готовая инфраструктура</h5>
            <p className={s.info}>
              Рядом 7 частных и муниципальных детских садов. 5 школ, лицеев и гимназий. В их числе
              престижная университетская гимназия «Универс». В пешеходной доступности два торговых
              центра «Апельсин» и «Славянский», спортивный комплекс «Экселент» с бассейном 25
              метров.
            </p>
          </div>
          <div className={s.block1}>
            <div className={s.img}>
              <img src={promo2} alt="promo2" />
            </div>
          </div>
        </div>
        <div className={s.blocks}>
          <div className={s.block1}>
            <div className={s.video}>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/B5RLsVj4y6E"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className={s.text3}>
            <img src={promo3Svg} alt="promo3Svg" />
            <h5 className={s.title}>Жилой комплекс с высоты</h5>
            <p className={s.info}>
              Любоваться Novella можно с самых разных точек города. Дом прекрасно виден даже в
              темное время суток — сложно не заметить красивый светящийся логотип. В видео мы
              постарались передать атмосферу жилого комплекса!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
