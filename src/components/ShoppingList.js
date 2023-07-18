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
      });
  }, []);

  const deletePlant = async (id) => {
    await fetch(`http://localhost:5000/plants/${id}`, {
      method: "DELETE",
    });
    setPlants((prevPlants) => prevPlants.filter((plant) => plant.plant_id !== id));
  };

  // const newPlant = async (plantData) => {
  //     const response = await fetch("http://localhost:5000/plants", {
  //       method: "PUT",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(plantData),
  //     });
  //       const newPlant = await response.json();
  //       setPlants((prevPlants) => [...prevPlants, newPlant]);
  // };

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
          <div>Horaire d'arrosage programmé</div>
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
