import { useState } from "react";
import "../styles/Cart.css";
import { BiSolidLeaf } from "react-icons/bi";

function Cart({ cart }) {
  const [isOpen, setIsOpen] = useState(true);

  return isOpen ? (
    <div className="lmj-cart">
      <button
        className="lmj-cart-toggle-button"
        onClick={() => setIsOpen(false)}
      >
      <u>Fermer</u>
      </button>
      <div>
        <div className="new-plant-title-icon">
          <p className="new-plant-title">Nouvelle plante</p>
          <BiSolidLeaf />
        </div>
        <input
          className="input-name-plant"
          placeholder="Nom de la plante"
        ></input>
        <input
          className="input-quantity-water"
          placeholder="Quantité d'eau par jour (ml)"
        ></input>
        <button className="button-new-plant">Ajouter</button>
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
