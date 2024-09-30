import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../assets/styles/demo.css";
import { connect } from "react-redux";
import next from "../assets/svg/arrownext.svg";
import Lottie from "lottie-react";
import fingerAni from "../assets/anime/finger.json";

const Online = ({}) => {
  const [type, setType] = useState(false);
  const [finger, setFinger] = useState(false);

  const navigate = useNavigate();

  const handleNav = (loc) => {
    navigate(loc);
  };
  return (
    <div className="demo-home">
      <div className="header">
        <div className="logo">
          <img src="/assets/logo.png" alt="" />
        </div>
        <div className="hom">
          <a href="/">Home</a>
        </div>
      </div>
      {finger ? (
        <div className="onp anime">
          <div className="ans">
            <Lottie animationData={fingerAni} />
          </div>
          <div className="btn" onClick={() => handleNav("/success")}>
            Demo successful Payment
          </div>
        </div>
      ) : (
        <div className="onp">
          <h2>Online Payment</h2>

          <div className="bloc">
            <div className="img">
              <img src="/assets/chow.png" alt="" />
            </div>
            <div className="deets">
              <div className="sub">Chowdeck</div>
              <div className="deet">
                2 Packs of big burgers, 1 Pack of Chicken and fries
              </div>
              <div className="addy">
                180 Freedom Way, Eti-Osa, Lekki 101502, Lagos
              </div>
            </div>
          </div>
          <div className="line">
            <div className="item">Burgers</div>
            <div className="price">₦5,299.00</div>
          </div>
          <div className="line">
            <div className="item">Chicken and Fries</div>
            <div className="price">₦8,000.00</div>
          </div>
          <div className="tots">
            <div className="item">Total</div>
            <div className="price">₦13,299.00</div>
          </div>
          {type ? (
            <div className="types">
              <div className="item" onClick={() => setFinger(true)}>
                <div className="up">
                  <img src="/assets/print.png" alt="" />
                  <span>Use Fingerprint</span>
                </div>
                <img src={next} alt="" />
              </div>
              <div className="item">
                <div className="up">
                  <img src="/assets/pay.png" alt="" />
                  <span>Other Payment Methods</span>
                </div>
                <img src={next} alt="" />
              </div>
            </div>
          ) : (
            <>
              <div className="btn" onClick={() => setType(true)}>
                Checkout
              </div>
              <div className="pow">
                <img src="/assets/pow.png" alt="" />
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps, {})(Online);
