import { plantList } from "../datas/plantList";
import PlantItem from "./PlantItem";
import "../styles/ShoppingList.css";
import { useState, useEffect } from "react";

function ShoppingList() {

  const [timeWaterig, setTimeWatering] = useState(0);

  useEffect(() => {
    
  }, []);

  return (
    <div className="lmj-shopping-list">
      <div className="container-time-watering">
        <button
          className="decrement-time-watering"
          onClick={() => {
            if (timeWaterig >= 1) setTimeWatering(timeWaterig - 1);
          }}
        >
          -
        </button>
        <div className="input-time-watering">
          <div><u>Horaire d'arrosage</u></div>
          {timeWaterig} h
        </div>
        <button
          className="increment-time-watering"
          onClick={() => {
            if (timeWaterig < 23) setTimeWatering(timeWaterig + 1);
          }}
        >
          +
        </button>
      </div>
      <ul className="lmj-plant-list">
        {plantList.map(({ id, cover, name, water, light, price }) => (
          <div key={id}>
            <PlantItem
              cover={cover}
              name={name}
              water={water}
              light={light}
              price={price}
            />
            <button>Arroser</button>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
