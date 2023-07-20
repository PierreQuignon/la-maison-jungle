import { useState } from "react";
import "../styles/Cart.css";
import { BiSolidLeaf } from "react-icons/bi";
import axios from "axios";

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
  };

  const preset_key = "x3kqcs78";
  const cloud_name = "dhc7v7ktf";
  const [image, setImage] = useState();

  function handleFile(e) {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', preset_key);
    axios.post(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, formData)
    .then(res => console.log(res))
    .catch(err => console.log(err));
  };

  // function handleFile(e) {
  //   const file = e.target.files[0];
  //   const formData = new FormData();
  //   formData.append('file', file);
  //   formData.append('upload_preset', preset_key);

  //   fetch(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, {
  //     method: 'POST',
  //     body: formData,
  //   })
  //     .then((response) => response.json())
  //     .then((data) => console.log(data))
  //     .catch((err) => console.log(err));
  // };


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
        <div>
          <input type="file" name="imageUpload" onChange={handleFile}/>
        </div>
        <button className="button-new-plant" onClick={() => loadObject()}>
          Ajouter
        </button>
      </div>
    </div>
  );
}

export default Cart;
