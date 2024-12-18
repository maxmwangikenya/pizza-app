import React from 'react';
import { Link } from 'react-router-dom';
import Pizza from '../Assets/pizza.jpeg';
import '../Styles/Homes.css';
import '../Styles/Footer.css';

function Home() {
  return (
    <div className="home"style={{ backgroundImage: `url(${Pizza})` }}>
      <div className="headerContainer" >
        <h1>Maxi's Pizzeria</h1>
        <p>PIZZA TO FIT ANY TASTE</p>
        <Link to="/menu">
          <button>ORDER NOW</button>
        </Link>
      </div> 
    </div>
  );
}

export default Home;
