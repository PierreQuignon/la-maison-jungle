import { useState, useEffect } from 'react'
import Banner from './Banner'
import Cart from './Cart'
import Footer from './Footer'
import ShoppingList from './ShoppingList'
import '../styles/Layout.css'
import '../styles/index.css'

function App() {
  const [plants, setPlants] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/plants")
      .then((res) => res.json())
      .then((resJson) => {
        setPlants(resJson);
      });
  }, []);

	return (
		<div>
			<Banner />
			<div className='lmj-layout-inner'>
				<Cart setPlants={setPlants}/>
				<ShoppingList plants={plants} setPlants={setPlants}/>
			</div>
			<Footer />
		</div>
	)
}

export default App
