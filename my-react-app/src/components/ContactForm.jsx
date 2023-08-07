import React, { useState } from 'react';

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
        // Contact added successfully
        // Clear the form fields
        setName('');
        setPhoneNumber('');
        setLatitude('');
        setLongitude('');
      } else {
        // Handle error response
        console.error('Error adding contact:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding contact:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Phone Number:
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </label>
      <br />
      <label>
        Latitude:
        <input
          type="text"
          value={latitude}
          onChange={(e) => setLatitude(e.target.value)}
        />
      </label>
      <br />
      <label>
        Longitude:
        <input
          type="text"
          value={longitude}
          onChange={(e) => setLongitude(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;