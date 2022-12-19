import { PropTypes } from 'prop-types';

export function Filter({ onFilterInput }) {
  return (
    <label>
      Filter contacts by name
      <input onInput={event => onFilterInput(event.target.value)} />
    </label>
  );
}

Filter.protoTypes = {
  onFilterInput: PropTypes.func.isRequired,
};
