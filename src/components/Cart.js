import "../styles/Cart.css";
import { BiSolidLeaf } from "react-icons/bi";

function Cart() {
  
  return (
    <div className="lmj-cart">
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
        <form action="/upload" method="post" enctype="multipart/form-data">
          <input type="file" id="imageUpload" name="imageUpload"/>
        </form>
        <button className="button-new-plant">Ajouter</button>
      </div>
    </div>
  );
}

export default Cart;
