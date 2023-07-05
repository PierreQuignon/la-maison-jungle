import { plantList } from "../datas/plantList";
import PlantItem from "./PlantItem";
import "../styles/ShoppingList.css";

function ShoppingList({ cart, updateCart }) {
  function addToCart(name, price) {
    const currentPlantAdded = cart.find((plant) => plant.name === name);
    if (currentPlantAdded) {
      const cartFilteredCurrentPlant = cart.filter(
        (plant) => plant.name !== name
      );
      updateCart([
        ...cartFilteredCurrentPlant,
        { name, price, amount: currentPlantAdded.amount + 1 },
      ]);
    } else {
      updateCart([...cart, { name, price, amount: 1 }]);
    }
  }
  const timeWatering = Array.from(Array(24).keys());

  return (
    <div className="lmj-shopping-list">
      <select
        onChange={(e) => e.target.value}
        className="lmj-categories-select"
        value={timeWatering}
      >
        {timeWatering.map((hour) => (
          <option key={hour} value={hour}>
            {hour}
          </option>
        ))}
        <option value="">Horaire d'arrosage</option>
      </select>

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
            <button onClick={() => addToCart(name, price)}>Arroser</button>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
