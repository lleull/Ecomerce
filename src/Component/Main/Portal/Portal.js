import React from "react";
import "./portal.css";
import small1 from "./../../images/prod2s.jpg";
import small2 from "./../../images/produ3s.jpg";
import small3 from "./../../images/prod4s.jpg";
import small4 from "./../../images/prod5s.jpg";
import next from './icon-next.svg'
import prev from './icon-previous.svg'
import imge1 from "./../../images/image-product-1.jpg";
const Portal = (props) => {
  return (
    <div className="portals">
      <div className="portal">
        <div className="images">
            
            <img className="mainimg" src={imge1} alt="sd0" />
            <img className="prev" src={prev} alt="ds"/>
            <img className="next" src={next} alt="ds"/>
     
          <div className="subimg">
            <img className="mainimg" src={small1} alt="sd0" />
            <img className="mainimg" src={small2} alt="sd0" />
            <img className="mainimg" src={small3} alt="sd0" />
            <img className="mainimg" src={small4} alt="sd0" />
          </div>
        </div>
      </div>

      <div onClick={props.open} className="backbox"></div>
    </div>
  );
};

export default Portal;
