import React from "react";
import "./Main.css";
import plus from "./icon-plus.svg";
import minus from "./icon-minus.svg";
import product from "./../images/image-product-1.jpg";
import product2 from "./../images/image-product-2.jpg";
import product3 from "./../images/image-product-3.jpg";
import product4 from "./../images/image-product-4.jpg";

import small1 from "./../images/prod2s.jpg";
import small2 from "./../images/produ3s.jpg";
import small3 from "./../images/prod4s.jpg";
import small4 from "./../images/prod5s.jpg";
import next from "./Portal/icon-next.svg";
import prev from "./Portal/icon-previous.svg";
import { useState } from "react";

const Main = (props) => {
  const [curr, setcurr] = useState([0]);

  const pluss = () => {
    if (imagess.length === curr) {
      setcurr(0);
    } else {
      setcurr(curr + 1);
    }
  };
  const minuss = () => {
    if (imagess.length === 0) {
      setcurr(imagess.length - 1);
    } else {
      setcurr(curr - 1);
    }
  };
  const imagess = [
    {
        id: '1',
      image: product,
    },
    {
        id: '2',
      image: product2,
    },
    {
        id: '3',
      image: product3,
    },
    { id: '4',
        image: product4,
      },
  ];

  return (
    <div className="mainpage">
     
        <div  className="repo">
          <img
          
            onClick={props.open}
            className="repoimg"
            src={product3}
            alt="sd0"
          />
          <img className="prevs" onClick={minuss} src={prev} alt="ds" />
          <img className="nexts" onClick={pluss} src={next} alt="ds" />
        </div>


      <div className="images">
        <img onClick={props.open} className="mainimg" src={product} alt="sd0" />
        <div className="subimg">
          <img
            onClick={props.open}
            className="mainimg"
            src={small1}
            alt="sd0"
          />
          <img
            onClick={props.open}
            className="mainimg"
            src={small2}
            alt="sd0"
          />
          <img
            onClick={props.open}
            className="mainimg"
            src={small3}
            alt="sd0"
          />
          <img
            onClick={props.open}
            className="mainimg"
            src={small4}
            alt="sd0"
          />
        </div>
      </div>
      <div className="mainright">
        <div className="maintext">
          <h2>SNEAKER COMPANY</h2>
          <h4>Fall Limited Edition Sneakers</h4>
          <p className="para">
            These Low profile Sneakers are your perfect casual Wear Companion.
            Featuring a durable rubber outer sole. they'll withstand everything
            the weather can offer{" "}
          </p>
        </div>
        <div className="prices">
          <h1 className="pricedata">
            $125.00 <p className="percentage">50%</p>
          </h1>
          <h6>$250.00</h6>
        </div>

        <div className="actions">
          <div className="control">
            <img src={minus} alt="da" />
            0
            <img src={plus} alt="das" />
          </div>
          <button className="cartbtn">Add Button</button>
        </div>
      </div>
    </div>
  );
};

export default Main;
