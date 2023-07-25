import { useState, useEffect } from 'react'
import Banner from './Banner'
import logo from '../assets/logo.png'
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
			<Banner>
				<img src={logo} alt='logo-la-maison-jungle' className='lmj-logo' />
				<h1 className='lmj-title'>La maison jungle</h1>
			</Banner>
			<div className='lmj-layout-inner'>
				<Cart setPlants={setPlants}/>
				<ShoppingList plants={plants} setPlants={setPlants}/>
			</div>
			<Footer />
		</div>
	)
}

export default App
