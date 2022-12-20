import { PropTypes } from 'prop-types';

import { Label, Input } from '../ContactForm/ContactForm.styled';

export function Filter({ onFilterInput }) {
  return (
    <Label>
      Filter contacts by name
      <Input
        onInput={event => onFilterInput(event.target.value)}
        name="search"
        placeholder="Search"
      />
    </Label>
  );
}

Filter.protoTypes = {
  onFilterInput: PropTypes.func.isRequired,
};
