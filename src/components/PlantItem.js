import '../styles/PlantItem.css'

function PlantItem({ cover, name, price }) {
	return (
		<li className='lmj-plant-item'>
			<span className='lmj-plant-item-price'>{price} ml/jour</span>
			<img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
			{name}
      <input placeholder="Modifier le volume d'eau"></input>
		</li>
	)
}

export default PlantItem
