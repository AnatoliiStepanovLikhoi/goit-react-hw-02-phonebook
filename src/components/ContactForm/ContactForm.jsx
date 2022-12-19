import { Component } from 'react';
import { PropTypes } from 'prop-types';
import { nanoid } from 'nanoid';

export class ContactForm extends Component {
  onSubmit = event => {
    event.preventDefault();

    console.log(event.currentTarget.elements);

    const { name: nameItem, number: numberItem } = event.currentTarget.elements;

    this.props.onFormSubmit({
      name: nameItem.value,
      number: numberItem.value,
      id: nanoid(),
    });

    event.currentTarget.reset();
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit">Add contacts</button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};