import PlantItem from "./PlantItem";
import "../styles/ShoppingList.css";
import { useState, useEffect } from "react";

function ShoppingList() {
  const [timeWaterig, setTimeWatering] = useState(0);
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/plants")
      .then((res) => res.json())
      .then((resJson) => {
        setPlants(resJson);
      })
      .catch((error) => {
        console.log('error call api', error);
      });
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
          <div>
            Horaire d'arrosage programmé
          </div>
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
        {plants.map(({ id, name, water, cover }) => (
          <div key={id}>
            <PlantItem
              name={name}
              water={water}
              cover={cover}
            />
          </div>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
