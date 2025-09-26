import { useState, type ChangeEvent } from "react";
import { useContext } from "react";
import { AppContext } from "../../utils/context";
import "./item-card.css";

type Item = {
  image: string;
  title: string;
  price: number;
  capacity?: number;
  withCapacity: boolean;
};

function ItemCard({ image, title, price, capacity, withCapacity }: Item) {
  const [quantity, setQuantity] = useState(0);
  const {items, setItems} = useContext(AppContext)

  const handleIncrement = () => {
    const newQuantity = quantity !== capacity || !withCapacity ? quantity + 1 : capacity;
    setQuantity(newQuantity);
    setItems([...items, {item_name: title, item_price: price, item_quantity: newQuantity}])
  };

  const handleDecrement = () => {
    const newQuantity = quantity !== 0 ? quantity - 1 : 0;
    setQuantity(newQuantity);
    setItems([...items, {item_name: title, item_price: price, item_quantity: newQuantity}])
  };

  return (
    <div className="card-container">
      <img src={image} alt="item image" id="item-image" />

      <div id="item-info">
        <h3 id="item-title">{title}</h3>
        {capacity ?? 0 > 0 ? (
          <h6 id="item-capacity">Capacity ({capacity})</h6>
        ) : (
          <></>
        )}
      </div>

      <div id="amount-info">
        <h3 id="item-price">${price.toFixed(2)}</h3>

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
