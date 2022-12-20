import React, { Component } from 'react';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

// import { PropTypes } from 'prop-types';
// import { nanoid } from 'nanoid';
import { capitalizeFirstLetters } from './Utils/capitalizeFirstLetters';

import { Container, MainTitle, SecondaryTitle } from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    // name: '',
    // number: '',
  };

  checkTheSameName = inputName => {
    const normaliziedInputName = inputName.toLowerCase().trim();

    console.log(normaliziedInputName);

    return this.state.contacts.find(
      ({ name }) => name.toLowerCase() === normaliziedInputName
    );
  };

  onContactFormSubmit = ({ name, number, id }) => {
    const capitalName = capitalizeFirstLetters(name);

    if (this.checkTheSameName(name)) {
      alert(`Sorry, ${capitalName} has already added!`);
      return;
    }

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, { name, number, id }],
      };
    });
  };

  onContactFilter = filterName => {
    this.setState({
      filter: filterName,
    });
  };

  onContactDelete = contactToDelete => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(({ id }) => {
          return id !== contactToDelete;
        }),
      };
    });
  };

  filterCurrentContacts = filterName => {
    const { contacts } = this.state;
    const normaliziedFilterName = filterName.toLowerCase().trim();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normaliziedFilterName)
    );
  };

  render() {
    const { contacts, filter } = this.state;
    // console.log(contacts);
    // console.log(filter);

    const selectedContacts = filter
      ? this.filterCurrentContacts(filter)
      : contacts;

    return (
      <Container>
        <MainTitle>Phonebook</MainTitle>
        <ContactForm onFormSubmit={this.onContactFormSubmit} />

        <SecondaryTitle>Contacts</SecondaryTitle>
        <Filter onFilterInput={this.onContactFilter} />
        <ContactList
          contacts={selectedContacts}
          onContactDelete={this.onContactDelete}
        />
      </Container>
    );
  }
}
