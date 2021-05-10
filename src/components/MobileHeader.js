import React, { useState, useEffect } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiFillApple } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import "../css/header.css";
import { Link } from "react-router-dom";
import { items } from "../data/NavItems";

function MobileHeader() {
  const [isClicked, setIsClicked] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const [show, setShow] = useState(false);

  const transition = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", transition);
    return () => window.removeEventListener("scroll", transition);
  }, []);

  const handleIsclicked = () => {
    setIsClicked(!isClicked);
  };
  return (
    <div className={`mobile__header ${isClicked && "mobile__background"} ${show && "mobile__transparent"}  `}>
      <div
        className={`mobile_nav ${isFocus && "hide"} `}
      >
        <div className="mobile__menu__icon" onClick={handleIsclicked}>
          {isClicked ? <AiOutlineClose /> : <HiMenuAlt4 />}
        </div>
        <Link onClick = { isClicked &&(handleIsclicked)} to="/">
          <div className="mobile__header__icon">
            <AiFillApple  />
          </div>
        </Link>
      </div>

      {isClicked && (
        <div className="mobile__header__items animate__animated animate__fadeInDown">
          <div className="mobile__search">
            <div className={`items ${isFocus && "onFocus"}`}>
              <BsSearch className="mobile__search__icon" />
              <input
                onFocus={() => setIsFocus(true)}
                className="mobile__search__input"
                type="search"
                placeholder="Search apple.com"
              />
            </div>

            {isFocus && <span onClick={() => setIsFocus(false)}>Cancel</span>}
          </div>

          <div className={`mobile__nav__items ${isFocus && "hide"}`}>
            {items.map((item) => (
              <Link onClick={handleIsclicked} className="mobile__nav__link" key={item.id} to={item.link}>
                <li  className="mobile__nav__item">{item.title}</li>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default MobileHeader;
