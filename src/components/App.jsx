import React, { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';

// import { PropTypes } from 'prop-types';
// import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  onContactFormSubmit = ({ name, number, id }) => {
    // console.log(name, number, id);

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, { name, number, id }],
      };
    });
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onFormSubmit={this.onContactFormSubmit} />

        <h2>Contacts</h2>
        {/* <Filter ... />
      <ContactList ... /> */}
      </div>
    );
  }
}
