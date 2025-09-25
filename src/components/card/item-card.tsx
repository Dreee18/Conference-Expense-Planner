import { useState, type ChangeEvent } from "react";
import "./item-card.css";

type Item = {
  image: string;
  title: string;
  price: number;
  capacity: number;
};

function ItemCard({ image, title, price, capacity }: Item) {
  const [quantity, setQuantity] = useState(0);
  const handleIncrement = () => {
    setQuantity(quantity !== capacity ? quantity + 1 : capacity);
  };

  const handleDecrement = () => {
    setQuantity(quantity !== 0 ? quantity - 1 : 0);
  };

  return (
    <div className="card-container">
      <img src={image} alt="item image" id="item-image" />

      <div id="item-info">
        <h3 id="item-title">{title}</h3>
        <h6 id="item-capacity">Capacity ({capacity})</h6>
      </div>

      <div id="amount-info">
        <h3 id="item-price">${price}.00</h3>

        <div id="qty-changer">
          <button id="decrement" onClick={() => handleDecrement()}>
            -
          </button>
          <input
            type="text"
            id="item-qty"
            value={quantity}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setQuantity(Number(e.target.value))
            }
          />
          <button id="increment" onClick={() => handleIncrement()}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
