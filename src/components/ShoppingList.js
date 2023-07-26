import PlantItem from "./PlantItem";
import "../styles/ShoppingList.css";
import { useEffect, useState } from "react";

function ShoppingList({ plants, setPlants }) {
  
  const [timeWatering, setTimeWatering] = useState(0);

  useEffect(() => {
    fetch("http://localhost:5000/waterings/1")
      .then((res) => res.json())
      .then((resJson) => {
        setTimeWatering(resJson.hour);
      });
  }, []);

  const updateWatering = async (id, hour) => {
    await fetch(`http://localhost:5000/waterings/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ hour }),
    });
  };

  function decreaseWatering() {
    if (timeWatering >= 1) setTimeWatering(timeWatering - 1);
    updateWatering(1, timeWatering - 1);
  }

  function increaseWatering() {
    if (timeWatering < 23) setTimeWatering(timeWatering + 1);
    updateWatering(1, timeWatering + 1);
  }

  const deletePlant = async (id) => {
    await fetch(`http://localhost:5000/plants/${id}`, {
      method: "DELETE",
    });
    setPlants((prevPlants) =>
      prevPlants.filter((plant) => plant.plant_id !== id)
    );
  };

  return (
    <div className="lmj-shopping-list">
      <div className="container-time-watering">
        <button
          className="decrement-time-watering"
          onClick={() => {
            decreaseWatering();
          }}
        >
          -
        </button>
        <div className="input-time-watering">
          <div>Horaire d'arrosage programmé</div>
          {timeWatering} h
        </div>
        <button
          className="increment-time-watering"
          onClick={() => {
            increaseWatering();
          }}
        >
          +
        </button>
      </div>
      <ul className="lmj-plant-list">
        {plants.map((plant) => (
          <div key={plant.plant_id}>
            <PlantItem plant={plant} deletePlant={deletePlant} />
          </div>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
