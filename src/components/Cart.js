import { useState } from "react";
import "../styles/Cart.css";
import { BiSolidLeaf } from "react-icons/bi";

function Cart({ setPlants }) {
  const [namePlant, setNamePlant] = useState("");

  const [waterQuantity, setWaterQuantity] = useState("");
  const waterQuantityInteger = parseInt(waterQuantity, 10);

  function capitalizeFirstLetter(str) {
    return str.charAt(0).toLowerCase() + str.slice(1);
  }
  const namePlantLowercase = capitalizeFirstLetter(namePlant);
  const coverTitle = `maison-jungle/${namePlantLowercase}`;

  const [newObject, setNewObject] = useState({});
  console.log(newObject);

  const objectNewPlant = {
    name: namePlant,
    water: waterQuantityInteger,
    cover: coverTitle,
  };

  const newPlant = async (plantData) => {
    const response = await fetch("http://localhost:5000/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(plantData),
    });

    const newPlant = await response.json();
    setPlants((prevPlants) => [...prevPlants, newPlant]);
  };

  function loadObject() {
    setNewObject(objectNewPlant);
    newPlant(objectNewPlant);
  }

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
          type="text"
          onChange={(e) => {
            setNamePlant(e.target.value);
          }}
        ></input>
        <input
          className="input-quantity-water"
          placeholder="Quantité d'eau par jour (ml)"
          type="text"
          onChange={(e) => {
            setWaterQuantity(e.target.value);
          }}
        ></input>
        <form action="/upload" method="post" enctype="multipart/form-data">
          <input type="file" id="imageUpload" name="imageUpload"/>
        </form>
        <button className="button-new-plant" onClick={() => loadObject()}>
          Ajouter
        </button>
      </div>
    </div>
  );
}

export default Cart;
