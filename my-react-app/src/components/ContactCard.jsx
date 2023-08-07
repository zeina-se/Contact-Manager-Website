import React from 'react';

const ContactCard = ({ contact }) => {
  return (
    <div className="contact-card">
      <h3>{contact.name}</h3>
      <p>Phone: {contact.phoneNumber}</p>
      <p>Latitude: {contact.latitude}</p>
      <p>Longitude: {contact.longitude}</p>
    </div>
  );
};

export default ContactCard;