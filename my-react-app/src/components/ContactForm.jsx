import React, { useState } from 'react';

import './card.css'

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhoneNumber] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newContact = {
      name,
      phone,
      latitude,
      longitude,
    };

    try {
      const response = await fetch('http://127.0.0.1:8000/api/add_update_contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newContact),
      });

      if (response.ok) {
        
        // Clear the form fields
        setName('');
        setPhoneNumber('');
        setLatitude('');
        setLongitude('');
      } else {
        console.error('Error adding contact:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding contact:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)} placeholder='Name'
        />
    
         <input
          type="text"
          value={phone}
          onChange={(e) => setPhoneNumber(e.target.value)} placeholder='Phone Number'
        />
      
        <input
          type="text"
          value={latitude}
          onChange={(e) => setLatitude(e.target.value)} placeholder='Latitude'
        />
        <input
          type="text"
          value={longitude}
          onChange={(e) => setLongitude(e.target.value)} placeholder='Longitude'
        />
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;