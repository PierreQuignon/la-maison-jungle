import "../styles/PlantItem.css";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { GiWateringCan } from "react-icons/gi";
import { BsTrash3 } from "react-icons/bs";

function PlantItem({ plant, deletePlant }) {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "dhc7v7ktf",
    },
  });

  const imagePlant = cld.image(plant.cover);
  imagePlant.resize(fill().width(350).height(350));

  function adviceMessage() {
    alert("Etes vous certain de vouloir supprimer cette plante ?")
    deletePlant(plant.plant_id)
  }

  return (
    <>
      <li className="lmj-plant-item">
        <span className="lmj-plant-quantity-watering">{plant.water} ml/jour</span>
        <button className="button-watering">
          <GiWateringCan />
        </button>
        <button className="button-delete-plant" onClick={()=>adviceMessage()}>
          <BsTrash3 />
        </button>
        <AdvancedImage
          cldImg={imagePlant}
          alt={`${plant.name} cover`}
          className="lmj-plant-item-cover"
        />
      </li>
      <p className="lmj-plant-name">{plant.name}</p>
    </>
  );
}

export default PlantItem;
