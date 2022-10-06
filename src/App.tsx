import axios from 'axios';
import { useState, useEffect } from 'react'
import './App.css'
import { Coin } from './components/Coins/coin';

interface IMenu {
  id: string;
  description: string;
  link: string;
}

const menuItems: IMenu[] = [
  {
    id: 'wallet',
    description: 'Wallet',
    link: '/'
  },
  {
    id: 'favorites',
    description: 'Favorites',
    link: '/fav'
  },
  {
    id: 'features',
    description: 'Features',
    link: '/features'
  },
]

function App() {
  const [coins, setCoin] = useState([])

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=brl&per_page=100&page=1')
    .then((response) => {
      console.log(response.data)
      setCoin(response.data)
    })
  }, [])

  return (
    <section className="home">
      <h4 className="logo">CoinStatus</h4>
      <label htmlFor="search" className="search">
        <i className="fas fa-search"></i>
        <input type="text" name="search" id='search' placeholder='Pesquisar...' />
      </label>
      <hr />
      <div className="coins">
        {
          coins.map((coin: any, index: number) => (
          <Coin
          key={coin.id}
          id={coin.id}
          name={coin.name}
          image={coin.image}
          symbol={coin.symbol}
          price={coin.current_price}
          index={index + 1}
          priceChange={coin.price_change_percentage_24h}
             />
             ))
        }
      </div>
    </section>
  )
}

export default App
