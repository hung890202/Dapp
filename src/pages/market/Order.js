import { useState } from "react";
import { v4 } from "uuid";

import "./Order.css";

const Order = ({ add }) => {
  const [price, setPrice] = useState("market-price");
  function priceChange(e) {
    setPrice(e.target.value);
  }

  const [quantity, setQuantity] = useState("1");
  function quantityChange(e) {
    setQuantity(e.target.value);
  }

  const [date, setDate] = useState("");
  function dateChange(e) {
    setDate(e.target.value);
  }

  function addItem() {
    add(function (prevData) {
      return [
        ...prevData,
        {
          id: v4(),
          price,
          quantity,
          date,
        },
      ];
    });
  }

  return (
    <div className="order-index">
      <div className="order-item">
        <span className="order-item-title">price</span>
        <input
          className="order-item-input"
          type="text"
          value={price}
          onChange={priceChange}
        />
      </div>
      <div className="order-item">
        <span className="order-item-title">quantity</span>
        <input
          className="order-item-input"
          type="text"
          value={quantity}
          onChange={quantityChange}
        />
      </div>
      {/*<div className="order-item">
      date:
      <input className="order-item-input" type="date" value={date} onChange={dateChange}/>
</div>*/}
      <button onClick={addItem} className="order-btn">
        Order
      </button>
    </div>
  );
};
export default Order;
