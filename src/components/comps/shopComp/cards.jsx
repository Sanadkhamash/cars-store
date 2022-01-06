import React from "react";
import { useNavigate } from "react-router-dom";

function Card(props) {
let navigate = useNavigate();

const handleBuy = () =>{
  if(localStorage.getItem("loggedUser")){
    let theCar = {
      name:props.name,
      model:props.model,
      src:props.src,
      id:props.id,
      price : props.price,
      purchasePrice: props.purchasePrice,
    }
    localStorage.setItem('order',JSON.stringify([theCar]));
    navigate(`/cart/${props.id}`)
  }
  else{
    navigate("/login")
  }

}
  return (
    <div className="car-item">
      <div className="car-container">
        <div className="shop_img">
          <img src={props.src} />
        </div>
        <div className="text">
          <h3>
            {props.name} {props.model}
          </h3>
          <p className="price">
            <span>{props.price}$</span> /Day
          </p>
          <div className="btns">
            <button onClick={()=> navigate(`/bookingForm/${props.id}`)} className="btn">
              Test Drive
            </button>
            <button
             className="btn"
             onClick={()=> handleBuy()}
             >
              Buy Now
            </button>
          </div>
          <div className="info">
            <i className="fas fa-caret-right "></i>
            <span> 2 Seats</span>
            <i className="fas fa-caret-right "></i>
            <span> 2 Bags</span>
            <i className="fas fa-caret-right "></i>
            <span> Airbags</span>
            <i className="fas fa-caret-right"></i>
            <span> Manual/Auto</span>
            <i className="fas fa-caret-right "></i>
            <span> AC</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
