import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../assets/styles/demo.css";
import { connect } from "react-redux";

const Pos = ({}) => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const handleNext = () => {
    if (step !== 4) {
      setStep(step + 1);
    } else {
      navigate("/");
    }
  };

  const smm = ["(Merchant)", "(Merchant)", "(Customer)", "Complete"];
  const bgg = [
    "Collect Payment ",
    "Put in Amount",
    "Provide Fingerprint",
    "Transaction",
  ];

  return (
    <div className="demo-home">
      <div className="header">
        <div className="logo">
          <img src="/assets/logo.png" alt="" />
        </div>
        <div className="hom">Home</div>
      </div>
      <div className="psp">
        <div className="text">
          <h1>{bgg[step - 1]}</h1>
          <h1>{smm[step - 1]}</h1>
          <div className="btn" onClick={handleNext}>
            {step === 4 ? "Go Home" : "Next"}
          </div>
        </div>
        <div className="img">
          <img src={`/assets/pos (${step}).png`} alt="" />
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps, {})(Pos);
