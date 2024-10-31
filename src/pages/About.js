import React from 'react';
import MultiplePizzas from '../Assets/multiplePizzas.jpeg';
import '../Styles/About.css';

function About() {
  return (
    <div className='about'>
      <div className='aboutTop' style={{ backgroundImage: `url(${MultiplePizzas})` }}>
      </div>
      <div className='aboutBottom'>
      <h1>About Us</h1>
        <p>
          Welcome to Maxi's Pizzeria!

          Founded in 2020, Maxi's Pizzeria is a slice of heaven nestled in the heart of Gachie. Our journey began with a simple passion for creating the perfect pizza—a place where friends and family could gather to enjoy delicious, handcrafted pies made from the freshest ingredients.

          At Maxi's, we believe that every pizza tells a story. From our signature Margherita to our adventurous seasonal specials, each creation is crafted with love and a dash of creativity. Our warm, inviting atmosphere makes it the ideal spot for casual dining, celebrations, or just a quick bite.

          Join us at Maxi's Pizzeria, where every meal is a celebration of flavor, community, and the art of pizza-making. Come taste the difference!
        </p>
      </div>
    </div>
  );
}

export default About;
