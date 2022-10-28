import React from "react";
import { useState } from "react";
import { BsGlobe } from "react-icons/bs";
import styled from "styled-components";

import Container from "../../layout/Container";
import headerLinks from "../../router";

import classes from "./Header.module.scss";

const SelectIcon = styled.img`
  transform: ${({ open }) => (open ? "rotateX(180deg)" : "rotateX(0deg)")};
  transition: 0.4s transform;
  width: 16px;
`;

const Header = () => {
  const [open, setOpen] = useState(false);
  const handleSelect = () => setOpen((state) => !state);

  return (
    <header className={classes["header"]}>
      <Container className={classes["header__content"]}>
        <a href="#!">
          <img src="/images/logo.svg" alt="Phlebolife" />
        </a>
        <ul className={classes["header__list"]}>
          {headerLinks.map(({ name, link }, i) => (
            <li key={i}>
              <a className={classes["header__link"]} href={link}>
                {name}
              </a>
            </li>
          ))}
        </ul>
        <button onClick={handleSelect} className={classes["header__button"]}>
          <p className={classes["header__button_icon"]}>
            <BsGlobe />
          </p>
          Русский
          <SelectIcon open={open} src={"/images/arrow.svg"} alt="Arrow Icon" />
        </button>
      </Container>
    </header>
  );
};

export default Header;
