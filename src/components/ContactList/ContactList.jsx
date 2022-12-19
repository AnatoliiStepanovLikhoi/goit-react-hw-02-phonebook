// import { Component } from 'react';
import { PropTypes } from 'prop-types';
import { ContactListItem } from './ContactListItem/ContactListItem';

export function ContactList(props) {
  const { contacts, onContactDelete } = props;

  //   console.log(onContactDelete);

  return (
    <ul>
      {contacts.map(contact => (
        <ContactListItem
          key={contact.id}
          contactInfo={contact}
          onContactDelete={onContactDelete}
        />
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  onContactDelete: PropTypes.func.isRequired,
};
