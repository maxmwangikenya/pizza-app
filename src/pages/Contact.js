import React from 'react';
import PizzaLeft from '../Assets/pizzaLeft.jpg';
import '../Styles/Contact.css';

function Contact() {
  return (
    <div className='contact'>
      <div className='leftSide' style={{ backgroundImage: `url(${PizzaLeft})` }}>
        {/* You might want to add some content here */}
      </div>
      <div className='rightSide'>
        <form id="contact-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input name='name' placeholder='Enter full name...' type='text' />

          <label htmlFor="email">Email</label>
          <input name='email' placeholder='Enter Email...' type='email' />

          <label htmlFor='message'>Message</label>
          <textarea rows='6' placeholder='Enter message...' name='message' required></textarea>

          <button type='submit'>Send</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
