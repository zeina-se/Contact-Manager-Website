import React from 'react';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="App">
      <h1>Contact Manager</h1>
      {/* <ContactForm /> */}
      <ContactList />
    </div>
  );
}

export default App;