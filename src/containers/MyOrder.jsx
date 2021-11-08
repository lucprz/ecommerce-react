import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import OrderItem from "@components/OrderItem";
import "@styles/MyOrder.scss";
import arrowLeft from "@icons/flechita.svg";

const MyOrder = () => {
  const { state } = useContext(AppContext);
  const sumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = state.cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <aside className="MyOrder">
      <div className="title-container">
        <img src={arrowLeft} alt="arrow" />
        <p className="title">My order</p>
      </div>
      <div className="my-order-content">
        {state.cart.map((item) => (
          <OrderItem product={item} key={`orderItem-${item.id}`} />
        ))}
        <div className="order">
          <p>
            <span>Total</span>
          </p>
          <p>${sumTotal()}</p>
        </div>
        <button className="primary-button">Checkout</button>
      </div>
    </aside>
  );
};

export default MyOrder;
