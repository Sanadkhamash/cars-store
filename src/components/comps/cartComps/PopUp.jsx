import React from "react";
import { useNavigate } from "react-router-dom";
import "./PopUp.css";
const PopUp = (props) => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/shop");
  };
  return (
    <div className="popup-box">
      <div className="box">
        <div className="box-title">
          <h3>Are you sure ? </h3>
        </div>
        <div className="box-btns">
          <button
            className="finalBtn-cancel"
            onClick={() => {props.setSubmitted(false)}}
          >
            Cancel
          </button>
          <button className="finalBtn" onClick={handleSubmit}>
            Yes, Explore More !
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
