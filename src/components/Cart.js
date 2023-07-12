import { useState, useEffect } from "react";
import "../styles/Cart.css";

function Cart({ cart, updateCart }) {
  const [isOpen, setIsOpen] = useState(true);
  const total = cart.reduce(
    (acc, plantType) => acc + plantType.amount * plantType.price,
    0
  );
  useEffect(() => {
    document.title = `LMJ: ${total}€ d'achats`;
  }, [total]);

  return isOpen ? (
    <div className="lmj-cart">
      <button
        className="lmj-cart-toggle-button"
        onClick={() => setIsOpen(false)}
      >
        Fermer
      </button>
      <div>
        <p>Nouvelle plante</p>
        <input placeholder="Nom de la plante"></input>
        <input placeholder="Quantité d'eau par jour (ml)"></input>
        <button>Ajouter</button>
      </div>
    </div>
  ) : (
    <div className="lmj-cart-closed">
      <button
        className="lmj-cart-toggle-button"
        onClick={() => setIsOpen(true)}
      >
        Ajouter une plante
      </button>
    </div>
  );
}

export default Cart;
