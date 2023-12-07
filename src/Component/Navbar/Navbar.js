import React, { useState } from "react";
import "./navbar.css";
import cart from "./icon-cart.svg";
import avater from "./image-avatar.png";
import icons from "./icon-menu-close.svg";
import cancel from "./icon-menu.svg";

const Navbar = () => {
  const [toogle, settoogle] = useState(false);
  return (
    <div className="header">
      {toogle ? <div className="backbox"></div> : ""}

      <div className="icon">
        {!toogle ? (
          <img
            onClick={() => settoogle(true)}
            className="iconspage"
            src={cancel}
            alt="datas"
          />
        ) : (
          ""
        )}
        {toogle ? (
          <div className="toogle">
            <img
              onClick={() => settoogle(false)}
              className="iconscancel"
              src={icons}
              alt="datas"
            />
            <div className="tooglelist">
              <li onClick={() => settoogle(false)}> Collections </li>
              <li onClick={() => settoogle(false)}>Men </li>
              <li onClick={() => settoogle(false)}>Women</li>

              <li onClick={() => settoogle(false)}>About</li>
              <li onClick={() => settoogle(false)}>Contact</li>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="heads">
        <h1 className="sneak">Sneaker</h1>
        <ul className="headul">
          <li className="lists">Collections</li>
          <li className="lists">Men</li>
          <li className="lists">Women</li>
          <li className="lists">About</li>
          <li className="lists">Contact</li>
        </ul>
      </div>
      <div className="imgs">
        <img style={{ width: "30px", height: "30px" }} src={cart} alt="sd" />
        <img style={{ width: "50px", height: "50px" }} src={avater} alt="sd" />
      </div>
    </div>
  );
};

export default Navbar;
