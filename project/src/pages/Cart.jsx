import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Button from "react-bootstrap/Button";

function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div className="container mt-4">
      <h2>Your Cart</h2>

      {cart.length === 0 && <p>Cart is empty</p>}

      {cart.map((item) => (
        <div key={item.id} className="d-flex justify-content-between mb-3">
          <div>
            <h5>{item.name}</h5>
            <p>Qty: {item.qty}</p>
          </div>
          <div>
            <p>${item.price * item.qty}</p>
            <Button
              variant="danger"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </Button>
          </div>
        </div>
      ))}

      <h4>Total: ${total}</h4>
    </div>
  );
}

export default Cart;