import "../styles/PlantItem.css";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { GiWateringCan } from "react-icons/gi";

function PlantItem({ name, water, cover }) {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "dhc7v7ktf",
    },
  });

  const imagePlant = cld.image(cover);
  imagePlant.resize(fill().width(350).height(350));

  return (
    <>
      <li className="lmj-plant-item">
        <span className="lmj-plant-quantity-watering">{water} ml/jour</span>
        <button className="button-watering">
          <GiWateringCan />
        </button>
        <AdvancedImage
          cldImg={imagePlant}
          alt={`${name} cover`}
          className="lmj-plant-item-cover"
        />
      </li>
      <p className="lmj-plant-name">{name}</p>
    </>
  );
}

export default PlantItem;
