import React from 'react';
import './card.css'

const ContactCard = ({ contact }) => {
  return (
    <div className="contact-card">
      <h3>{contact.name}</h3>
      <p>Phone: {contact.phone}</p>
      <p>Latitude: {contact.latitude}</p>
      <p>Longitude: {contact.longitude}</p>
    </div>
  );
};

export default ContactCard;