import { useContext } from "react";
import { AppContext } from "../utils/context";
import "./comp-summary.css";

function ExpenseSummary() {
  const { items } = useContext(AppContext);

  const displayItemRow = () => {
    return items.map((item) => (
      <tr key={item.item_name}>
        <td>{item.item_name}</td>
        <td>{item.item_price.toFixed(2)}</td>
        <td>{item.item_quantity}</td>
        <td>${(item.item_price * item.item_quantity).toFixed(2)}</td>
      </tr>
    ));
  };

  return (
    <div className="overlay">
      <div className="expense_summary">
        <h3>TOTAL COST FOR THE EVENT</h3>
        <h2 id="total_price">$00000.00</h2>

        <table id="item-summary">
          <thead>
            <tr>
              <th id="item-name">Name</th>
              <th id="item-cost">Unit Cost</th>
              <th id="item-qty">Quantity</th>
              <th id="subtotal">Sub Total</th>
            </tr>
          </thead>
          <tbody>{displayItemRow()}</tbody>
        </table>
      </div>
    </div>
  );
}

export default ExpenseSummary;
