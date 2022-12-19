import { PropTypes } from 'prop-types';

export function ContactListItem(props) {
  //   console.log(props.contactInfo.name);

  const {
    contactInfo: { name, number, id },
    onContactDelete,
  } = props;

  const capitalName = `${name[0].toUpperCase()}${name.slice(1)}`;

  //   console.log(onContactDelete);

  return (
    <li>
      <p>
        {capitalName}: {number}
      </p>
      <button type="button" onClick={() => onContactDelete(id)}>
        Remove
      </button>
    </li>
  );
}

ContactListItem.propTypes = {
  contactInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),

  onContactDelete: PropTypes.func.isRequired,
};
