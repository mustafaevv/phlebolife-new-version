import React, { useEffect } from "react";
import { useState } from "react";
import { BsFillPlayFill } from "react-icons/bs";

import Container from "../../layout/Container";
import Dots from "../Dots";

import classes from "./Banner.module.scss";
import bannerItemsNumber from "./BannerItems";

const Banner = () => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => incrementCount, 100);
    return () => clearTimeout(timer);
  }, []);

  
  const incrementCount = () => {
    setCount(count + 1);
  };
  return (
    <section className={classes["banner"]}>
      <Container className={classes["banner__container"]}>
        <div className={classes["banner__block"]}>
          <div className={classes["banner__left"]}>
            <h1 className={classes["banner__title"]}>
              Phlebo<span className={classes["banner__title_item"]}>life</span>
            </h1>
            <p className={classes["banner__subtitle"]}>
              Специализированная клиника по лечению хронических заболеваний вен
              и лимфы
            </p>
            <p className={classes["banner__text"]}>
              У нас самый современный подход к лечению варикоза, основанный на
              доказательной медицине!
            </p>
            <div className={classes["banner__items"]}>
              <button className={classes["banner__button"]}>
                <img src="/images/findascope.svg" alt="FindaScope" />{" "}
                Консультация
              </button>
              <p className={classes["banner__playIcon"]}>
                <BsFillPlayFill />
              </p>
            </div>
          </div>
          <div className={classes["banner__right"]}>
            <img
              className={classes["banner__img"]}
              src="/images/nurse.png"
              alt="Nurse"
            />
          </div>
          <div className={classes["banner__background"]}></div>
        </div>
        <div className={classes["banner__increment"]}>
          {bannerItemsNumber.map((item) => (
            <div className={classes["banner__item"]} key={item.number}>
              <p>{count}+</p>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Banner;
